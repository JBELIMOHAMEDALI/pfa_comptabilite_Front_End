import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { USER_DASHBOARD_END_POINT } from "../../services/endpoints";
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
    let accessToken = this.activatedRoute.snapshot.paramMap.get("accessToken");
    this.tokenService.saveToken(accessToken);

    this.backendService.get(`${USER_DASHBOARD_END_POINT}`).subscribe(
      new Observer(this.router, null, false).OBSERVER_GET((response) => {
        if (response.err) {
          accessToken = localStorage.getItem("accessToken");
          this.backendService.get(`${USER_DASHBOARD_END_POINT}`).subscribe(
            new Observer(this.router, null, false).OBSERVER_GET((response) => {
              if (response.err) {
                this.tokenService.clearLS();
                return this.router.navigate(["/signin"]);
              }
            })
          );
        }
        this.router.navigate(["/app/dashboard"]);
      })
    );
  }
}