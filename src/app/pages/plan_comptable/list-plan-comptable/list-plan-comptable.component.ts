import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPlanComptableComponent } from '../add-plan-comptable/add-plan-comptable.component';

@Component({
  selector: 'app-list-plan-comptable',
  templateUrl: './list-plan-comptable.component.html',
  styleUrls: ['./list-plan-comptable.component.scss']
})
export class ListPlanComptableComponent implements OnInit {

  constructor(private modalService: NgbModal ) { }

  ngOnInit() {
  }
  OpenAdd(){
    const modalRef = this.modalService.open(AddPlanComptableComponent);
    modalRef.componentInstance.title = `Ajouter plan comptable`;
  //   modalRef.componentInstance.id = Number(demande.id_offre_stage);
    modalRef.componentInstance.name = "eya";
  }

}
