import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { ObservableInput } from "rxjs-compat/Observable";
import { catchError, switchMap } from "rxjs/operators";
import { BackendService } from "./backend.service";
import { GET_USER_REFRESH_TOKEN_END_POINT } from "./endpoints";
import Observer from "./observer";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
  refresh: boolean = false;
  constructor(
    private http: HttpClient,
    private injector: Injector,
    private backendService: BackendService
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const accessToken = this.injector.get(TokenService).getToken("accessToken");

    if (accessToken) {
      const req = request.clone({
        setHeaders: {
          authorization: `Bearer ${accessToken}`,
        },
      });
      //refresh case
      return next.handle(req).pipe(
        catchError((err: HttpErrorResponse) => {
          console.log(err);

          if (err.status === 403 && !this.refresh) {
            this.refresh = true;
            const refreshToken = this.injector
              .get(TokenService)
              .getToken("refreshToken");
            return this.http
              .post(GET_USER_REFRESH_TOKEN_END_POINT, { token: refreshToken })
              .pipe(
                switchMap((res: any) => {
                  const newAccessToken = res.accessToken;
                  this.injector
                    .get(TokenService)
                    .saveToken("accessToken", newAccessToken);
                  const tokenizedReq = req.clone({
                    setHeaders: {
                      Authorization: `Bearer ${newAccessToken}`,
                    },
                  });
                  return next.handle(tokenizedReq);
                })
              );
            // as Observable<HttpEvent<any>>;
          }
          // else {
          //   const tokenizedReq = req.clone({
          //     setHeaders: {
          //       Authorization: `Bearer ${accessToken}`,
          //     },
          //   });
          //   return next.handle(tokenizedReq);
          // }
          this.refresh = false;

          return throwError(() => err);
        })
      );
    }
    return next.handle(request);
    // const tokenService = this.injector.get(TokenService);
    // const tokenizedReq = req.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${tokenService.getToken()}`,
    //   },
    // });
    // return next.handle(tokenizedReq);
  }
}
