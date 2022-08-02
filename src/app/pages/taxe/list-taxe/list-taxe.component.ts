import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedServService } from './../../../service/shared-serv.service';
import { AddUpdateTaxeComponent } from '../add-update-taxe/add-update-taxe.component';



@Component({
  selector: 'app-list-taxe',
  templateUrl: './list-taxe.component.html',
  styleUrls: ['./list-taxe.component.scss']
})
export class ListTaxeComponent implements OnInit {

  constructor(private modalService: NgbModal,private ser_shared:SharedServService) { }
  list_taxe :any=[];
    ngOnInit() {
      this.get_all_from_taxe();
    }
  
    // obj:any
    update_taxe(){
      // const obje ={nom_societe:"update",domaine_societe:"ypdate",id_societe:1}
      // this.ser_shared.UpdateAll(obje,"societe",false);
      // this.ser_shared.getAll("societe").subscribe((data)=>{
      //   console.log(data);
      // });
    }
    get_all_from_taxe(){
      this.ser_shared.getAll("taxe").subscribe({
        next:(data)=>{
          this.list_taxe=[];
          const medata:any=data;
          const list_so = medata.rows;
          this.list_taxe=list_so;
         console.log(this.list_taxe);
        },error:()=>{
          this.list_taxe=[];
          console.log("error")
  
        }
      })
    }
    openAdd() {
      const modalRef = this.modalService.open(AddUpdateTaxeComponent);
      modalRef.componentInstance.titre = 'Ajouter un taxe';
      modalRef.componentInstance.action = 'add';
      modalRef.componentInstance.object = null;
    }
    openUpdate(obj:any) {
      //alert(JSON.stringify(obj))
      const modalRef = this.modalService.open(AddUpdateTaxeComponent);
      modalRef.componentInstance.titre = 'Modifer un taxe';
      modalRef.componentInstance.action = 'update';
      modalRef.componentInstance.object = obj;
    }
    opendelete(id:string){
      // const modalRef = this.modalService.open(DeleteAllFromTabComponent);
     //  modalRef.componentInstance.titre = 'delete un taxe';
      // modalRef.componentInstance.id = id;
    }
  }
  
  