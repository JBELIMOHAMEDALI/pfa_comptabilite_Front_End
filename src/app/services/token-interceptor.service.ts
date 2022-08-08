import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const tokenService = this.injector.get(TokenService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${tokenService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}