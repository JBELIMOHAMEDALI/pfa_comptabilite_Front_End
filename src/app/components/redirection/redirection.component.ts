import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  GET_USER_REFRESH_TOKEN_END_POINT,
  USER_DASHBOARD_END_POINT,
} from "../../services/endpoints";
import Observer from "../../services/observer";
import { BackendService } from "../../services/backend.service";
import { TokenService } from "../../services/token.service";

@Component({
  selector: "app-redirection",
  templateUrl: "./redirection.component.html",
  styleUrls: ["./redirection.component.scss"],
})
export class RedirectionComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private backendService: BackendService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.redirectUser();
  }

  redirectUser() {
    const refreshToken =
      this.activatedRoute.snapshot.paramMap.get("refreshToken");

    if (refreshToken) {
      this.backendService
        .post(`${GET_USER_REFRESH_TOKEN_END_POINT}`, { token: refreshToken })
        .subscribe(
          new Observer(this.router, null, false).OBSERVER_POST(
            (response: any, nav: boolean) => {
              if (nav) {
                this.tokenService.saveToken("refreshToken", refreshToken);
                this.tokenService.saveToken(
                  "accessToken",
                  response.accessToken
                );
                this.router.navigate(["/app/dashboard"]);
              } else {
                this.router.navigate(["/signin"]);
              }
            }
          )
        );
    } else {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      this.router.navigate(["/signin"]);
    }
  }
}
