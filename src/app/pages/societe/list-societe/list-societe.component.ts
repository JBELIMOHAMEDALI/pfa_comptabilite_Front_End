import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteAllFromTabComponent } from '../../delete_all/delete-all-from-tab/delete-all-from-tab.component';
import { AddUpdateSocieteComponent } from '../add-update-societe/add-update-societe.component';
import { SharedServService } from './../../../service/shared-serv.service';

@Component({
  selector: 'app-list-societe',
  templateUrl: './list-societe.component.html',
  styleUrls: ['./list-societe.component.scss']
})
export class ListSocieteComponent implements OnInit {

  constructor(private modalService: NgbModal,private ser_shared:SharedServService) { }
list_socite :any=[];
  ngOnInit() {
    this.get_all_from_socite();
  }

  // obj:any
  update_socite(){
    // const obje ={nom_societe:"update",domaine_societe:"ypdate",id_societe:1}
    // this.ser_shared.UpdateAll(obje,"societe",false);
    // this.ser_shared.getAll("societe").subscribe((data)=>{
    //   console.log(data);
    // });
  }
  get_all_from_socite(){
    this.ser_shared.getAll("societe").subscribe({
      next:(data)=>{
        this.list_socite=[];
        const medata:any=data;
        const list_so = medata.rows;
        this.list_socite=list_so;
       console.log(this.list_socite);
      },error:()=>{
        this.list_socite=[];
        console.log("error")

      }
    })
  }
  openAdd() {
    const modalRef = this.modalService.open(AddUpdateSocieteComponent);
    modalRef.componentInstance.titre = 'Ajouter un societe';
    modalRef.componentInstance.action = 'add';
    modalRef.componentInstance.object = null;
  }
  openUpdate(obj:any) {
    //alert(JSON.stringify(obj))
    const modalRef = this.modalService.open(AddUpdateSocieteComponent);
    modalRef.componentInstance.titre = 'Modifer un societe';
    modalRef.componentInstance.action = 'update';
    modalRef.componentInstance.object = obj;
  }
  opendelete(id:string){
    const modalRef = this.modalService.open(DeleteAllFromTabComponent);
    modalRef.componentInstance.titre = 'delete un societe';
    modalRef.componentInstance.id = id;
  }
}
