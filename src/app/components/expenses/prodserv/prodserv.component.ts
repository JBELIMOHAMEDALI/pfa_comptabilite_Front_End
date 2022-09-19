import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import  swal from 'sweetalert';
import { PRODUCTS_POPUP_TYPE, SERVICES_POPUP_TYPE } from '../../../../app/popup/popup-type';
import { PostComponent } from '../../../../app/popup/post/post.component';
import { PutComponent } from '../../../../app/popup/put/put.component';
import { BackendService } from '../../../../app/services/backend.service';
import { GET_USER_PRODUCTS_END_POINT, GET_USER_SERVICES_END_POINT } from '../../../../app/services/endpoints';
import Observer from '../../../../app/services/observer';
import { SharedService } from '../../../../app/services/shared.service';

@Component({
  selector: 'app-prodserv',
  templateUrl: './prodserv.component.html',
  styleUrls: ['./prodserv.component.scss']
})
export class ProdservComponent implements OnInit {
  productList: [] = [];
  serviceList: [] = [];
  collectionSize: number = 0;
  page = 1;
  pageSize = 5;
  pageSizes = [5, 20, 100];
  etat="1";
  id_company:string;

  constructor(
    private backendService: BackendService,
    private modalService: NgbModal,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.getSelectedCompany((id)=>{
      if (id) {
        this.id_company = id;
        this.getproduit();
      } else {
        return swal("Failure!", "No company selected !", "info");
      }
    });
  }

  getproduit() {
    const offset = (this.page - 1) * this.pageSize;
    this.backendService.get(`${GET_USER_PRODUCTS_END_POINT}/${this.id_company}`,this.pageSize,offset).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.productList = response.rows;
        this.collectionSize=response.totalItems;
      })
    );
  }
  getservices() {
    const offset = (this.page - 1) * this.pageSize;
    this.backendService.get(`${GET_USER_SERVICES_END_POINT}/${this.id_company}`,this.pageSize,offset).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.serviceList = response.rows;
        this.collectionSize=response.totalItems;
      })
    );
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getproduit();
  }

  handlePageChange(currentPage: number) {
    this.page = currentPage;
    this.getproduit();
  }

  changeEtat(event){
    // this.listStage = [null];
    const etat=event.nextId.toString();
    this.etat=etat;
    // this.getAllOffreStages(this.year,etat);
  }
  OpenModal(title: string, obj?) {
if(this.id_company){
    if(this.etat==="1"){
//produt
      const modalRef = this.modalService.open(
        title.split(" ")[0] === "NEW" ? PostComponent : PutComponent,
        { size: "lg", backdrop: "static" }
      );
      modalRef.componentInstance.title = title;
      modalRef.componentInstance.type = PRODUCTS_POPUP_TYPE;

      modalRef.componentInstance.payload = obj ? { ...obj }:{id_company:this.id_company};
    }
    if(this.etat==="2"){
     //service

      const modalRef = this.modalService.open(
        title.split(" ")[0] === "NEW" ? PostComponent : PutComponent,
        { size: "lg", backdrop: "static" }
      );
      modalRef.componentInstance.title = title;
      modalRef.componentInstance.type = SERVICES_POPUP_TYPE;

      modalRef.componentInstance.payload = obj ? { ...obj }:{id_company:this.id_company};
    }
  } else {
    return swal("Failure!", "No company selected !", "info");
  }

  }
// SERVICES PRODUCTS
  deleteCustomer(id){

  }
}
