import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {
  GOOGLE_SIGNIN_END_POINT,
  SIGNIN_END_POINT,
} from "../../../services/endpoints";
import { BackendService } from "../../../services/backend.service";
import Observer from "../../../services/observer";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  constructor(private backendService: BackendService, private router: Router) {}

  ngOnInit() {}

  login(form: NgForm) {
    const payload = { ...form.value };
    this.backendService
      .post(SIGNIN_END_POINT, payload)
      .subscribe(
        new Observer(this.router, "/app/dashboard", false).OBSERVER_POST()
      );
  }

}
