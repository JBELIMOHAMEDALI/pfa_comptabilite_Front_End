import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
// import { DetailsComponent } from '../../popup/details/details.component';
import { DetailsComponent } from "../../../popup/details/details.component";
import swal from "sweetalert";
import {
  PRODUCTS_POPUP_TYPE,
  SERVICES_POPUP_TYPE,
} from "../../../../app/popup/popup-type";
import { PostComponent } from "../../../../app/popup/post/post.component";
import { PutComponent } from "../../../../app/popup/put/put.component";
import { BackendService } from "../../../../app/services/backend.service";
import {
  DELETE_USER_CUSTOMERS_END_POINT,
  DELETE_USER_PRODUCTS_END_POINT,
  DELETE_USER_SERVICES_END_POINT,
  GET_USER_PRODUCTS_END_POINT,
  GET_USER_SERVICES_END_POINT,
} from "../../../../app/services/endpoints";
import Observer from "../../../../app/services/observer";
import { SharedService } from "../../../../app/services/shared.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-prodserv",
  templateUrl: "./prodserv.component.html",
  styleUrls: ["./prodserv.component.scss"],
})
export class ProdservComponent implements OnInit {
  itemsList: [] = [];
  collectionSize: number = 0;
  page = 1;
  pageSize = 5;
  pageSizes = [5, 20, 100];
  etat = "1";
  id_company: string;

  constructor(
    private backendService: BackendService,
    private modalService: NgbModal,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    // this.sharedService.getSelectedCompany((id) => {
    //   if (id) {
    //     this.id_company = id;
    //     this.getproduit("0");
    //     this.getservices("0");
    //   } else {
    //     return swal("Failure!", "No company selected !", "info");
    //   }
    // });
  }

  // getproduit(operation:string) {
  //   const offset = (this.page - 1) * this.pageSize;
  //   this.backendService
  //     .get(
  //       `${GET_USER_PRODUCTS_END_POINT}/${this.id_company}/${operation}`,
  //       this.pageSize,
  //       offset
  //     )
  //     .subscribe(
  //       new Observer().OBSERVER_GET((response) => {
  //         this.productList = response.rows;
  //         this.collectionSize = response.totalItems;
  //       })
  //     );
  // }
  // getservices(operation:string) {
  //   const offset = (this.page - 1) * this.pageSize;
  //   this.backendService
  //     .get(
  //       `${GET_USER_SERVICES_END_POINT}/${this.id_company}/${operation}`,
  //       this.pageSize,
  //       offset
  //     )
  //     .subscribe(
  //       new Observer().OBSERVER_GET((response) => {
  //         this.serviceList = response.rows;
  //         this.collectionSize = response.totalItems;
  //       })
  //     );
  // }

  handlePageSizeChange(event: any): void {
    // this.pageSize = event.target.value;
    // this.page = 1;
    // this.getproduit("0");
  }

  handlePageChange(currentPage: number) {
    // this.page = currentPage;
    // this.getproduit("0");
  }

  changeEtat(event) {
    // const etat = event.nextId.toString();
    // this.etat = etat;
    // if (this.etat === "1") {
    //   this.getproduit("0");
    // } else {
    //   this.getservices("0");
    // }
  }
  OpenModal(title: string, obj?) {
    // if (this.id_company) {
    //   //produt
    //   const modalRef = this.modalService.open(
    //     title.split(" ")[0] === "NEW" ? PostComponent : PutComponent,
    //     { size: "lg", backdrop: "static" }
    //   );
    //   modalRef.componentInstance.title = title;
    //   modalRef.componentInstance.operationPro = this.opetationProduct;
    //   modalRef.componentInstance.type =
    //     this.etat == "1" ? PRODUCTS_POPUP_TYPE : SERVICES_POPUP_TYPE;
    //   modalRef.componentInstance.payload = obj
    //     ? { ...obj }
    //     : { id_company: this.id_company };
    // } else {
    //   return swal("Failure!", "No company selected !", "info");
    // }
  }
  // SERVICES PRODUCTS
  deleteItem(id) {
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
          .delete(`${DELETE_USER_PRODUCTS_END_POINT}/${id}`)
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
  OpenDetails(title: string, payload: any) {
    const modalRef = this.modalService.open(DetailsComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.type = PRODUCTS_POPUP_TYPE;
    modalRef.componentInstance.payload = { ...payload };
  }

  // OpenModal2(title: string, obj?) {

  //   if (this.id_company) {
  //     //produt
  //     const modalRef = this.modalService.open(
  //       title.split(" ")[0] === "NEW" ? PostComponent : PutComponent,
  //       { size: "lg", backdrop: "static" }
  //     );
  //     modalRef.componentInstance.title = title;
  //     modalRef.componentInstance.operationSer = this.opetationService;
  //     modalRef.componentInstance.type =
  //       this.etat == "1" ? PRODUCTS_POPUP_TYPE : SERVICES_POPUP_TYPE;
  //     modalRef.componentInstance.payload = obj
  //       ? { ...obj }
  //       : { id_company: this.id_company };
  //   } else {
  //     return swal("Failure!", "No company selected !", "info");
  //   }
  // }
  // SERVICES PRODUCTS
  // deleteCustomer2(id) {
  //   swal({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     closeOnEsc: true,
  //     closeOnClickOutside: true,
  //     buttons: ["cancel", "confirm"],
  //   }).then((result) => {
  //     if (result) {
  //       this.backendService
  //         .delete(`${DELETE_USER_SERVICES_END_POINT}/${id}`)
  //         .subscribe(
  //           new Observer(
  //             this.router,
  //             null,
  //             true,
  //             true,
  //             this.sharedService,
  //             null
  //           ).OBSERVER_DELETE()
  //         );
  //     }
  //   });
  // }
  // OpenDetails2(title: string, payload: any) {
  //   const modalRef = this.modalService.open(DetailsComponent);
  //   modalRef.componentInstance.title = title;
  //   modalRef.componentInstance.type = SERVICES_POPUP_TYPE;
  //   modalRef.componentInstance.payload = { ...payload };
  // }
  // changeProductState(event:any){
  //   this.opetationProduct = event;
  //   if(event == "0"){
  //     this.productList = [];
  //     this.getproduit("0")
  //   }else{
  //     this.productList = [];
  //     this.getproduit("1")
  //   }

  // }
  // changeServiceState(valur:any){
  //   this.opetationService=""
  //   this.opetationService =valur;
  //   if(valur == "0"){
  //     this.serviceList=[]
  //     this.getservices("0")
  //   }else{
  //     this.serviceList=[]
  //     this.getservices("1")
  //   }

  // }
}
