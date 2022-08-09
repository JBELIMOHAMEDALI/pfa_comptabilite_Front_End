import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../../services/shared.service';
import { PostComponent } from '../../popup/post/post.component';
import { PutComponent } from '../../popup/put/put.component';
import { BackendService } from '../../services/backend.service';
import { DELETE_USER_COMPANIES_END_POINT, GET_USER_COMPANIES_END_POINT } from '../../services/endpoints';
import Observer from '../../services/observer';
import  swal from 'sweetalert';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyList:[]=[]

  constructor(private backendService:BackendService,private router:Router,
    private modalService: NgbModal,
    private sharedService:SharedService
    ) { }

  ngOnInit() {
    this.getCompanies();
  }
  getCompanies() {
    this.backendService.get(GET_USER_COMPANIES_END_POINT).subscribe(
      new Observer(this.router,'',false).OBSERVER_GET((response)=>{
        if(!response.err)
        this.companyList=response.rows;

      })
    )

  }

  deleteCompany(id_company:string){
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      closeOnEsc: true,
      closeOnClickOutside: true,
      buttons:['cancel','confirm'],
    }).then((result) => {
      if (result) {
        this.backendService.delete(`${DELETE_USER_COMPANIES_END_POINT}/${id_company}`).subscribe(
          new Observer(this.router,null,true,true,this.sharedService,null).OBSERVER_DELETE()
        )
      }
    })

  }

  editCompany(id_company:string){
    this.backendService.delete(`${DELETE_USER_COMPANIES_END_POINT}/${id_company}`).subscribe(
      new Observer(null,null,true,true).OBSERVER_EDIT()
    )
  }

  OpenModal(title:string,company?) {
    const modalRef = this.modalService.open(title.split(" ")[0]==='NEW'?PostComponent:PutComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.payload = company&&{...company};

  }

}
