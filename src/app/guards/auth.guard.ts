import { Injectable } from "@angular/core";
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivate,
} from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "../services/token.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivateChild, CanActivate {
  constructor(private router: Router, private tokenService: TokenService) {}
  canActivate(//test for login pages
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.tokenService.LoggedIn()) {
      this.router.navigate(["/app"]);
      return false;
    } else {
      return true;
    }
  }

  canActivateChild(//test for app
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.tokenService.LoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/signin"]);
      return false;
    }
  }
}
