import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { USER_COMPANIES_END_POINT } from '../../services/endpoints';
import Observer from '../../services/observer';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyList:[]=[]

  constructor(private backendService:BackendService,private router:Router) { }

  ngOnInit() {
    this.getCompanies();
  }
  getCompanies() {
    this.backendService.get(USER_COMPANIES_END_POINT).subscribe(
      new Observer(this.router,'',false).OBSERVER_GET((response)=>{
        if(!response.err)
        this.companyList=response.rows;

      })
    )

  }

}
