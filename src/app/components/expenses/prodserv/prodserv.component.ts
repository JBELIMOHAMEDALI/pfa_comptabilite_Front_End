import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../../../../app/services/backend.service';
import { GET_USER_PRODUCTS_END_POINT } from '../../../../app/services/endpoints';
import Observer from '../../../../app/services/observer';
import { SharedService } from '../../../../app/services/shared.service';

@Component({
  selector: 'app-prodserv',
  templateUrl: './prodserv.component.html',
  styleUrls: ['./prodserv.component.scss']
})
export class ProdservComponent implements OnInit {
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
  ) { }

  ngOnInit() {
  }
  getproduit() {
    const offset = (this.page - 1) * this.pageSize;
    this.backendService.get(`${GET_USER_PRODUCTS_END_POINT}/${this.id_company}`,this.pageSize,offset).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.customersList = response.rows;
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
    // const etat=event.nextId.toString();
    // this.etat=etat;
    // this.getAllOffreStages(this.year,etat);
  }
}
