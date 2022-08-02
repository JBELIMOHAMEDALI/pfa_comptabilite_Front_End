import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedServService } from './../../../service/shared-serv.service';
import { AddUpdatePlanComptableComponent } from '../add-update-plan-comptable/add-update-plan-comptable.component';


@Component({
  selector: 'app-list-plan-comptable',
  templateUrl: './list-plan-comptable.component.html',
  styleUrls: ['./list-plan-comptable.component.scss']
})
export class ListPlanComptableComponent implements OnInit {

  constructor(private modalService: NgbModal,private ser_shared:SharedServService) { }
list_plan_comptable :any=[];
  ngOnInit() {
    this.get_all_from_plan_comptable();
  }

  // obj:any
  update_plan_comptable(){
    // const obje ={nom_societe:"update",domaine_societe:"ypdate",id_societe:1}
    // this.ser_shared.UpdateAll(obje,"societe",false);
    // this.ser_shared.getAll("societe").subscribe((data)=>{
    //   console.log(data);
    // });
  }
  get_all_from_plan_comptable(){
    this.ser_shared.getAll("plan_comptable").subscribe({
      next:(data)=>{
        this.list_plan_comptable=[];
        const medata:any=data;
        const list_so = medata.rows;
        this.list_plan_comptable=list_so;
       console.log(this.list_plan_comptable);
      },error:()=>{
        this.list_plan_comptable=[];
        console.log("error")

      }
    })
  }
  openAdd() {
    const modalRef = this.modalService.open(AddUpdatePlanComptableComponent);
    modalRef.componentInstance.titre = 'Ajouter un plan_comptable';
    modalRef.componentInstance.action = 'add';
    modalRef.componentInstance.object = null;
  }
  openUpdate(obj:any) {
    //alert(JSON.stringify(obj))
    const modalRef = this.modalService.open(AddUpdatePlanComptableComponent);
    modalRef.componentInstance.titre = 'Modifer un plan_comptable';
    modalRef.componentInstance.action = 'update';
    modalRef.componentInstance.object = obj;
  }
  opendelete(id:string){
    // const modalRef = this.modalService.open(DeleteAllFromTabComponent);
   //  modalRef.componentInstance.titre = 'delete un plan_comptable';
    // modalRef.componentInstance.id = id;
  }
}

