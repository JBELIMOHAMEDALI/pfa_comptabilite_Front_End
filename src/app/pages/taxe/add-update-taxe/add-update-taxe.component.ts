import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedServService } from './../../../service/shared-serv.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-update-taxe',
  templateUrl: './add-update-taxe.component.html',
  styleUrls: ['./add-update-taxe.component.scss']
})
export class AddUpdateTaxeComponent implements OnInit {


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
      this.model.code_taxe="";
      this.model.intitule="";
      this.model.compte_taxe ="";
      this.model.type_de_taxe="";
      this.model.sens="";
      this.model.taux_pourcentage ="";
      this.model.numero="";
      this.model.id_taxe="";
      
    }else
    {
      this.model.code_taxe=this.object.code_taxe;
      this.model.intitule=this.object.intitule;
      this.model.compte_taxe =this.object.compte_taxe;
      this.model.type_de_taxe=this.object.type_de_taxe;
      this.model.sens=this.object.sens;
      this.model.taux_pourcentage =this.object.taux_pourcentage;
      this.model.numero=this.object.numero;
      this.model.id_taxe =this.object.id_taxe;

    }
  }
  reloadComponent() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }
  addupdate(f:NgForm){

    const obj ={code_taxe:f.value.code_taxe,intitule:f.value.intitule,compte_taxe:f.value.compte_taxe,type_de_taxe:f.value.type_de_taxe,sens:f.value.sens,taux_pourcentage:f.value.taux_pourcentage,numero:f.value.numero,id_taxe:f.value.id_taxe};
    if(this.action=="add"){
      // alert(JSON.stringify(obj))
      this.serv_shared.addAll(obj,"taxe").subscribe({
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
      const obj ={code_taxe:this.model.code_taxe,intitule:this.model.intitule,compte_taxe:this.model.compte_taxe ,type_de_taxe:this.model.type_de_taxe,sens:this.model.sens,taux_pourcentage:this.model.taux_pourcentage,numero:this.model.numero,id_taxe:this.model.id_taxe}
      this.serv_shared.UpdateAll(obj,"taxe");
    }
   // alert(obj)
    //

  }


}
