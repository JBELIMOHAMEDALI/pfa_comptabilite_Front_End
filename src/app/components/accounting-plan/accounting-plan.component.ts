import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";
import swal from "sweetalert";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { SharedService } from "../../services/shared.service";
import {
  DELETE_USER_ACCOUNTING_PLAN_ROW_END_POINT,
  GET_USER_ACCOUNTING_PLAN_END_POINT,
  GET_USER_ACCOUNTING_PLAN_SOURCES_END_POINT,
  IMPORT_USER_ACCOUNTING_PLAN_END_POINT,
  UNLINK_USER_ACCOUNTING_PLAN_END_POINT,
} from "../../services/endpoints";
import Observer from "../../services/observer";
import { PostComponent } from "../../popup/post/post.component";
import { PutComponent } from "../../popup/put/put.component";
import { ACCOUNTING_PLAN_POPUP_TYPE } from "../../popup/popup-type";

@Component({
  selector: "app-accounting-plan",
  templateUrl: "./accounting-plan.component.html",
  styleUrls: ["./accounting-plan.component.scss"],
})
export class AccountingPlanComponent implements OnInit {
  accountingPlansList: [] = [];
  sourceFiles: [] = [];
  id_company: string;
  selectedSource: string;

  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.getsources();
  }

  getsources() {
    this.id_company = this.sharedService.getStoredCompany();
    this.backendService
      .get(`${GET_USER_ACCOUNTING_PLAN_SOURCES_END_POINT}/${this.id_company}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {
          if (response && !response.err) {
            this.sourceFiles = response.rows;
            this.getAccountingPlans(
              response.rows[0] && response.rows[0].source
            );
          }
        })
      );
  }

  changeSelectedFile(selectedFile: string) {
    this.getAccountingPlans(selectedFile);
  }

  getAccountingPlans(source: string) {
    this.selectedSource = source;

    this.backendService
      .get(`${GET_USER_ACCOUNTING_PLAN_END_POINT}/${this.id_company}/${source}`)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {
          if (!response.err) this.accountingPlansList = response.rows;
        })
      );
  }

  deleteAccountingPlanRow(id: string) {
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
          .delete(
            `${DELETE_USER_ACCOUNTING_PLAN_ROW_END_POINT}/${this.id_company}/${this.selectedSource}/${id}`
          )
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

  OpenModal(title: string, accounting_plan?) {
    const modalRef = this.modalService.open(
      title.split(" ")[0] === "NEW" ? PostComponent : PutComponent
    );
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = ACCOUNTING_PLAN_POPUP_TYPE;
    modalRef.componentInstance.payload = accounting_plan && {
      ...accounting_plan,
    };
  }

  changeFile(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData = new FormData();
      formData.append("accounting-plan-excel-file", file);
      this.backendService
        .post(
          `${IMPORT_USER_ACCOUNTING_PLAN_END_POINT}/${this.id_company}`,
          formData
        )
        .subscribe(
          new Observer().OBSERVER_GET((response) => {
            console.log(response);

            if (!response.err) this.accountingPlansList = response.rows;
          })
        );
      // if (file.type.split("/")[0] === "image") {
      //   try {
      //     // ((await this.profilService.changeEtudiantphoto(formData)) as any) ||
      //     [];
      //     // this.sharedService.reloadComponent();
      //   } catch (error) {
      //     swal("Echec!", error.error.message, "warning");
      //   }
      // } else {
      //   swal("info!", "choisir une image ! ", "info");
      // }
    }
  }

  unlinkFile() {
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
          .delete(
            `${UNLINK_USER_ACCOUNTING_PLAN_END_POINT}/${this.id_company}/${this.selectedSource}`
          )
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
}
