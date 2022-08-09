import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { POST_USER_COMPANIES_END_POINT } from '../../services/endpoints';
import Observer from '../../services/observer';
import { BackendService } from '../../services/backend.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input('title') title:string;

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
      .post(POST_USER_COMPANIES_END_POINT, {...form.value})
      .subscribe(
        new Observer(this.router, null,true, true,this.sharedService,this.activeModal).OBSERVER_POST()
      );

  }

}
