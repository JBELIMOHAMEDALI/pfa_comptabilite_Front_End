import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {
  GET_USER_COMPANIES_END_POINT,
  PUT_USER_COMPANIES_END_POINT,
  PUT_USER_EMPLOYEES_END_POINT,
} from "../../services/endpoints";
import { BackendService } from "../../services/backend.service";
import { SharedService } from "../../services/shared.service";
import Observer from "../../services/observer";

@Component({
  selector: "app-put",
  templateUrl: "./put.component.html",
  styleUrls: ["./put.component.scss"],
})
export class PutComponent implements OnInit {
  @Input("title") title: string;
  @Input("type") type: string;
  @Input("payload") payload: any;

  actualDate: string;

  birthdateinputype: string;
  hiredateinputype: string;
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
  }
  ngOnInit() {
    if (this.type === "EMPLOYEE") this.getCompanies();
  }

  onSubmit(form: NgForm) {
    let endpoint: string = "";
    let payload = { ...form.value };
    switch (this.type) {
      case "COMPANY":
        endpoint = PUT_USER_COMPANIES_END_POINT;
        payload = { ...payload, id_company: this.payload.id_company };
        break;
      case "EMPLOYEE":
        endpoint = PUT_USER_EMPLOYEES_END_POINT;
        payload = { ...payload, id_employee: this.payload.id_employee };
        break;
    }
    this.backendService
      .put(endpoint, payload)
      .subscribe(
        new Observer(
          this.router,
          null,
          true,
          true,
          this.sharedService,
          this.activeModal
        ).OBSERVER_EDIT()
      );
  }

  getCompanies() {
    this.backendService.get(GET_USER_COMPANIES_END_POINT).subscribe(
      new Observer(this.router, "", false).OBSERVER_GET((response) => {
        if (!response.err) this.companyList = response.rows;
      })
    );
  }

  setinputtype(event, type: string) {
    if (type === "birthdate") this.birthdateinputype = "date";
    if (type === "hiredate") this.hiredateinputype = "date";
  }
}