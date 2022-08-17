import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from '../../popup/details/details.component';
import { CUSTOMER_POPUP_TYPE } from '../../popup/popup-type';
import { PostComponent } from '../../popup/post/post.component';
import { PutComponent } from '../../popup/put/put.component';
import { BackendService } from '../../services/backend.service';
import { DELETE_USER_CUSTOMERS_END_POINT, GET_USER_CUSTOMERS_END_POINT } from '../../services/endpoints';
import Observer from '../../services/observer';
import { SharedService } from '../../services/shared.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {
  customersList: [] = [];
  collectionSize: number = 0;
  page = 1;
  pageSize = 5;
  pageSizes = [5, 20, 100];
  id_company:string;

  constructor(
    private backendService: BackendService,
    private router: Router,
    private modalService: NgbModal,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.id_company = this.sharedService.getStoredCompany();

    const offset = (this.page - 1) * this.pageSize;
    this.backendService.get(GET_USER_CUSTOMERS_END_POINT,this.pageSize,offset).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.customersList = response.rows;
        this.collectionSize=response.totalItems;
      })
    );
  }

  deleteCustomer(id_customer: string) {
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
          .delete(`${DELETE_USER_CUSTOMERS_END_POINT}/${id_customer}`)
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

  OpenModal(title: string, customer?) {
    const modalRef = this.modalService.open(
      title.split(" ")[0] === "NEW" ? PostComponent : PutComponent,
      { size: "lg", backdrop: "static" }
    );
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = CUSTOMER_POPUP_TYPE;

    modalRef.componentInstance.payload = customer ? { ...customer }:{id_company:this.id_company};
  }

  OpenDetails(title: string, payload:any) {
    const modalRef = this.modalService.open(DetailsComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = CUSTOMER_POPUP_TYPE;

    modalRef.componentInstance.payload ={ ...payload };
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getCustomers();
  }

  handlePageChange(currentPage: number) {
    this.page = currentPage;
    this.getCustomers();
  }
}
