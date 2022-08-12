import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import swal from 'sweetalert';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { DELETE_USER_ACCOUNTING_PLAN_END_POINT, GET_USER_ACCOUNTING_PLAN_END_POINT } from '../../services/endpoints';
import Observer from '../../services/observer';
import { PostComponent } from '../../popup/post/post.component';
import { PutComponent } from '../../popup/put/put.component';
import { ACCOUNTING_PLAN_POPUP_TYPE } from '../../popup/popup-type';

@Component({
  selector: 'app-accounting-plan',
  templateUrl: './accounting-plan.component.html',
  styleUrls: ['./accounting-plan.component.scss']
})
export class AccountingPlanComponent implements OnInit {

  accountingPlansList: [] = []

  constructor(private backendService: BackendService, private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.getAccountingPlans();
  }

  getAccountingPlans() {
    this.backendService.get(GET_USER_ACCOUNTING_PLAN_END_POINT).subscribe(
      new Observer(this.router, '', false).OBSERVER_GET((response) => {
        if (!response.err)
          this.accountingPlansList = response.rows;

      })
    )

  }

  deleteAccountingPlan(id_accounting_plan: string) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      closeOnEsc: true,
      closeOnClickOutside: true,
      buttons: ['cancel', 'confirm'],
    }).then((result) => {
      if (result) {
        this.backendService.delete(`${DELETE_USER_ACCOUNTING_PLAN_END_POINT}/${id_accounting_plan}`).subscribe(
          new Observer(this.router, null, true, true, this.sharedService, null).OBSERVER_DELETE()
        )
      }
    })

  }

  OpenModal(title: string, accounting_plan?) {
    const modalRef = this.modalService.open(title.split(" ")[0] === 'NEW' ? PostComponent : PutComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = ACCOUNTING_PLAN_POPUP_TYPE;
    modalRef.componentInstance.payload = accounting_plan && { ...accounting_plan };

  }

  async changeFile(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      if (file.type.split("/")[0] === "image") {
        try {
          const formData = new FormData();
          formData.append("photo", file);
          // ((await this.profilService.changeEtudiantphoto(formData)) as any) ||
            [];
          // this.sharedService.reloadComponent();
        } catch (error) {
          swal("Echec!", error.error.message, "warning");
        }
      } else {
        swal("info!", "choisir une image ! ", "info");
      }
    }
  }

}