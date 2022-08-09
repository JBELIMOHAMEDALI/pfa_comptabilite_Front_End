import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PUT_USER_COMPANIES_END_POINT } from '../../services/endpoints';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';
import Observer from '../../services/observer';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {

  @Input('title') title:string;
  @Input('payload') payload:any

  constructor(
    public activeModal: NgbActiveModal,
    public sharedService: SharedService,
    public backendService: BackendService,
    private router:Router
  ) {}
  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.backendService
      .put(PUT_USER_COMPANIES_END_POINT, {...form.value,id_company:this.payload.id_company})
      .subscribe(
        new Observer(this.router, null,true, true,this.sharedService,this.activeModal).OBSERVER_EDIT()
      );

  }

}
