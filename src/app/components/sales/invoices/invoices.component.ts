import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { GET_USER_INVOICES_END_POINT } from "../../../services/endpoints";
import Observer from "../../../services/observer";
import { BackendService } from "../../../services/backend.service";
import { SharedService } from "../../../services/shared.service";
import swal from "sweetalert";

@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.scss"],
})
export class InvoicesComponent implements OnInit {
  invoicesList: [] = [];
  collectionSize: number = 0;
  page = 1;
  pageSize = 5;
  pageSizes = [5, 20, 100];
  id_company: string;
  constructor(
    private backendService: BackendService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.sharedService.getSelectedCompany((id)=>{
      if (id) {
        this.id_company = id;
        this.getInvoices();
      } else {
        return swal("Failure!", "No company selected !", "info");
      }
    });
  }

  getInvoices() {
    const offset = (this.page - 1) * this.pageSize;

    this.backendService
      .get(`${GET_USER_INVOICES_END_POINT}/${this.id_company}`, this.pageSize, offset)
      .subscribe(
        new Observer().OBSERVER_GET((response) => {
          this.collectionSize = response.totalItems;
          this.invoicesList = response.rows;
        })
      );
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getInvoices();
  }

  handlePageChange(currentPage: number) {
    this.page = currentPage;
    this.getInvoices();
  }
}
