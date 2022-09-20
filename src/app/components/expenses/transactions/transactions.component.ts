import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../../services/shared.service";
import swal from "sweetalert";
import { BackendService } from "../../../services/backend.service";
import Observer from "../../../services/observer";
import { GET_USER_TRANSACTIONS_END_POINT } from "../../../services/endpoints";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DetailsComponent } from "../../../popup/details/details.component";
import { TRANSACTIONS_POPUP_TYPE } from "../../../popup/popup-type";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent implements OnInit {
  customersList: [] = [];
  collectionSize: number = 0;
  page = 1;
  pageSize = 5;
  pageSizes = [5, 20, 100];
  id_company: string;
  transactionsList: [] = [];

  constructor(
    private sharedService: SharedService,
    private backendService: BackendService,
    private modalService: NgbModal,

  ) {}

  ngOnInit() {
    this.sharedService.getSelectedCompany((id) => {
      if (id) {
        this.id_company = id;
        this.getTransactions();
      } else {
        return swal("Failure!", "No company selected !", "info");
      }
    });
  }

  getTransactions() {
    const offset = (this.page - 1) * this.pageSize;
    this.backendService
      .get(
        `${GET_USER_TRANSACTIONS_END_POINT}/${this.id_company}`,
        this.pageSize,
        offset
      )
      .subscribe(
        new Observer().OBSERVER_GET((response) => {
          this.collectionSize = response.totalItems;
          this.transactionsList = response.rows;
        })
      );
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getTransactions();
  }

  handlePageChange(currentPage: number) {
    this.page = currentPage;
    this.getTransactions();
  }

  OpenDetails(title: string, payload: any) {
    const modalRef = this.modalService.open(DetailsComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = TRANSACTIONS_POPUP_TYPE;

    modalRef.componentInstance.payload = payload && { ...payload };
  }

  changeEtat(event){
  }
}
