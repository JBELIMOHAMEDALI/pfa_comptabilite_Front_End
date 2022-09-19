import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  customersList: [] = [];
  collectionSize: number = 0;
  page = 1;
  pageSize = 5;
  pageSizes = [5, 20, 100];
  constructor() { }

  ngOnInit() {
  }
  OpenModal(){}
  deleteCustomer(){}
  handlePageSizeChange(event: any): void {
    // this.pageSize = event.target.value;
    // this.page = 1;
    // this.getproduit();
  }

  handlePageChange(currentPage: number) {
    // this.page = currentPage;
    // this.getproduit();
  }


}
