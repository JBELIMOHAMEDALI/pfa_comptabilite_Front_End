import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedServService } from './../../../service/shared-serv.service';
import swal from 'sweetalert';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-update-societe',
  templateUrl: './add-update-societe.component.html',
  styleUrls: ['./add-update-societe.component.scss']
})
export class AddUpdateSocieteComponent implements OnInit {

  @Input() titre;
  @Input() action;
  @Input() object;
  model: any = {};
  constructor(public activeModal: NgbActiveModal,private serv_shared:SharedServService,
    private router: Router,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute ) { }


  ngOnInit() {
    if(this.action=="add"){
      this.model.domaine_societe="";
      this.model.nom_societe="";
      this.model.id_societe ="";
    }else
    {
      this.model.domaine_societe=this.object.domaine_societe;
      this.model.nom_societe=this.object.nom_societe;
      this.model.id_societe =this.object.id_societe;

    }
  }
  reloadComponent() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }
  addupdate(f:NgForm){

    const obj ={nom_societe:f.value.nom_societe,domaine_societe:f.value.domaine_societe,id_societe:f.value.id_societe};
    if(this.action=="add"){
      // alert(JSON.stringify(obj))
      this.serv_shared.addAll(obj,"societe").subscribe({
        next:(data)=>{
          this.modalService.dismissAll();
          this.reloadComponent();
          swal('Success', '', 'success');

        }
        ,error:()=>{
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
        }
      })
    }else{
      const obj ={nom_societe:this.model.nom_societe,domaine_societe:this.model.domaine_societe,id_societe:this.model.id_societe}
      this.serv_shared.UpdateAll(obj,"societe");
    }
   // alert(obj)
    //

  }


}
