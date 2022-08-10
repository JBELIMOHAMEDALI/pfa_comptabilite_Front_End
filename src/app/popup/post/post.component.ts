import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { GET_USER_COMPANIES_END_POINT, POST_USER_COMPANIES_END_POINT, POST_USER_EMPLOYEES_END_POINT } from "../../services/endpoints";
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
    if(this.type==='EMPLOYEE')
    this.getCompanies()
  }

  getCompanies() {
    this.backendService.get(GET_USER_COMPANIES_END_POINT).subscribe(
      new Observer(this.router, '', false).OBSERVER_GET((response) => {
        if (!response.err)
          this.companyList = response.rows;
      })
    )

  }

  onSubmit(form: NgForm) {

    let endpoint:string='';
    switch (this.type) {
      case "COMPANY":
        endpoint=POST_USER_COMPANIES_END_POINT
        break;
      case "EMPLOYEE":
        endpoint=POST_USER_EMPLOYEES_END_POINT
        break;
    }
    this.backendService
      .post(endpoint, { ...form.value })
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

  setinputtype(event, type: string) {
    if (type === "birthdate") this.birthdateinputype = "date";
    if (type === "hiredate") this.hiredateinputype = "date";
  }
}