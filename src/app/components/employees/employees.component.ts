import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PostComponent } from "../../popup/post/post.component";
import { PutComponent } from "../../popup/put/put.component";
import { BackendService } from "../../services/backend.service";
import { DELETE_USER_EMPLOYEES_END_POINT, GET_USER_EMPLOYEES_END_POINT } from "../../services/endpoints";
import Observer from "../../services/observer";
import { SharedService } from "../../services/shared.service";
import swal from "sweetalert";
import { EMPLOYEE_POPUP_TYPE } from "../../popup/popup-type";
import { DetailsComponent } from "../../popup/details/details.component";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"],
})
export class EmployeesComponent implements OnInit {
  employeesList: [] = [];

  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.backendService.get(GET_USER_EMPLOYEES_END_POINT).subscribe(
      new Observer(this.router, "", false).OBSERVER_GET((response) => {
        if (!response.err) this.employeesList = response.rows;
      })
    );
  }

  deleteEmployee(id_employee: string) {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      closeOnEsc: true,
      closeOnClickOutside: true,
      buttons: ["cancel", "confirm"],
    }).then((result) => {
      if (result) {
        this.backendService
          .delete(`${DELETE_USER_EMPLOYEES_END_POINT}/${id_employee}`)
          .subscribe(
            new Observer(
              this.router,
              null,
              true,
              true,
              this.sharedService,
              null
            ).OBSERVER_DELETE()
          );
      }
    });
  }

  OpenModal(title: string, employee?) {
    const modalRef = this.modalService.open(
      title.split(" ")[0] === "NEW" ? PostComponent : PutComponent,
      { size: "lg", backdrop: "static" }
    );
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = EMPLOYEE_POPUP_TYPE;

    modalRef.componentInstance.payload = employee && { ...employee };
  }

  OpenDetails(title: string, payload) {
    const modalRef = this.modalService.open(DetailsComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = EMPLOYEE_POPUP_TYPE;

    modalRef.componentInstance.payload = payload && { ...payload };
  }
}