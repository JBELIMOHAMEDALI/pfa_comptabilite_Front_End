import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-plan-comptable',
  templateUrl: './add-plan-comptable.component.html',
  styleUrls: ['./add-plan-comptable.component.scss']
})
export class AddPlanComptableComponent implements OnInit {


  @Input() name;
  @Input() title;
  

  constructor(public activeModal: NgbActiveModal ) { }



  ngOnInit() {
  }

}
