import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {
  GET_USER_COMPANIES_END_POINT,
  POST_USER_ACCOUNTING_PLAN_END_POINT,
  POST_USER_COMPANIES_END_POINT,
  POST_USER_CUSTOMERS_END_POINT,
  POST_USER_EMPLOYEES_END_POINT,
  POST_USER_TAXES_END_POINT,
} from "../../services/endpoints";
import Observer from "../../services/observer";
import { BackendService } from "../../services/backend.service";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input("title") title: string;
  @Input("type") type: string;
  @Input("payload") payload: any;

  actualDate: string;

  birthdateinputype: string;
  hiredateinputype: string;
  startperiodinputype: string;
  companyList: [];

  constructor(
    public activeModal: NgbActiveModal,
    public sharedService: SharedService,
    public backendService: BackendService,
    private router: Router
  ) {
    this.actualDate = new Date().toDateString();
    this.birthdateinputype = "text";
    this.hiredateinputype = "text";
    this.startperiodinputype="text"

  }
  ngOnInit() {}

  // getCompanies() {
  //   this.backendService.get(GET_USER_COMPANIES_END_POINT).subscribe(
  //     new Observer(this.router, '', false).OBSERVER_GET((response) => {
  //       if (!response.err)
  //         this.companyList = response.rows;
  //     })
  //   )

  // }

  onSubmit(form: NgForm) {
    let endpoint: string = "";
    let payload = { ...form.value, id_company: this.payload.id_company };
    switch (this.type) {
      case "COMPANY":
        endpoint = POST_USER_COMPANIES_END_POINT;
        delete payload['id_company']
        break;
      case "EMPLOYEE":
        endpoint = POST_USER_EMPLOYEES_END_POINT;
        break;
      case "ACCOUNTING_PLAN":
        endpoint = POST_USER_ACCOUNTING_PLAN_END_POINT;
        payload = { ...payload, source: this.payload.source };
        break;
      case "TAX":
        endpoint = POST_USER_TAXES_END_POINT;
        break;

      case "CUSTOMER":
        endpoint = POST_USER_CUSTOMERS_END_POINT;
        break;
    }

    this.backendService
      .post(endpoint, payload)
      .subscribe(
        new Observer(
          this.router,
          null,
          true,
          true,
          this.sharedService,
          this.activeModal
        ).OBSERVER_POST()
      );
  }

  setinputtype(type: string) {
    if (type === "birthdate") this.birthdateinputype = "date";
    if (type === "hiredate") this.hiredateinputype = "date";
        if (type === "start_period") this.startperiodinputype = "date";

  }
}
