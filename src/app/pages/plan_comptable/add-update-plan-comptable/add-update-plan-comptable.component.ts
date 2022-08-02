import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedServService } from './../../../service/shared-serv.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-update-plan-comptable',
  templateUrl: './add-update-plan-comptable.component.html',
  styleUrls: ['./add-update-plan-comptable.component.scss']
})
export class AddUpdatePlanComptableComponent implements OnInit {

  
  @Input() titre;
  @Input() action;
  @Input() object;
  model: any = {};
  constructor(public activeModal: NgbActiveModal,private serv_shared:SharedServService,
    private router: Router,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute ) { }

  private id_societe:string;
  private nom_societe:string;
  ngOnInit() {
    if(this.action=="add"){
      this.model.nom_du_fichier="";
      this.model.type_de_donnees="";
      this.model.intitule ="";
      this.model.numero_compte="";
      this.model.type_de_fichier="";
      this.model.delimiteur_enregistrement ="";
      this.model.delimiteur_champ="";
      this.model.origine_fichier="";
      this.model.nombre_de_decimales ="";
      this.model.separateur_decimales="";
      this.model.cadrage="";
      this.model.separateur_miliers ="";
      this.model.caractere_remplissage="";
      this.model.debut_enregistrement="";
      this.model.entete_du_fichier ="";
      this.model.id_comptable ="";
      this.model.id_societe  ="";
    }else
    {
      this.model.nom_du_fichier=this.object.nom_du_fichier;
      this.model.type_de_donnees=this.object.type_de_donnees;
      this.model.intitule =this.object.intitule;
      this.model.numero_compte=this.object.numero_compte;
      this.model.type_de_fichier=this.object.type_de_fichier;
      this.model.delimiteur_enregistrement =this.object.delimiteur_enregistrement;
      this.model.delimiteur_champ=this.object.delimiteur_champ;
      this.model.origine_fichier=this.object.origine_fichier;
      this.model.nombre_de_decimales =this.object.nombre_de_decimales;
      this.model.separateur_decimales=this.object.separateur_decimales;
      this.model.cadrage=this.object.cadrage;
      this.model.separateur_miliers =this.object.separateur_miliers;
      this.model.caractere_remplissage=this.object.caractere_remplissage;
      this.model.debut_enregistrement=this.object.debut_enregistrement;
      this.model.entete_du_fichier=this.object.entete_du_fichier;
      this.model.id_comptable =this.object.id_comptable;
      this.model.id_societe  =this.object.id_societe ;

    }
  }
  reloadComponent() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }
  addupdate(f:NgForm){

    const obj ={nom_du_fichier:f.value.nom_du_fichier,type_de_donnees:f.value.type_de_donnees,intitule:f.value.intitule,numero_compte:f.value.numero_compte,type_de_fichier:f.value.type_de_fichier,delimiteur_enregistrement:f.value.delimiteur_enregistrement,delimiteur_champ:f.value.delimiteur_champ,origine_fichier:f.value.origine_fichier,nombre_de_decimales:f.value.nombre_de_decimales,separateur_decimales:f.value.separateur_decimales,cadrage:f.value.cadrage,separateur_miliers:f.value.separateur_miliers,caractere_remplissage:f.value.caractere_remplissage,debut_enregistrement:f.value.debut_enregistrement,entete_du_fichier:f.value.entete_du_fichier,id_comptable:f.value.id_comptable,id_societe :1  };
    if(this.action=="add"){
      // alert(JSON.stringify(obj))
      this.serv_shared.addAll(obj,"plan_comptable").subscribe({
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
      const obj ={nom_du_fichier:this.model.nom_du_fichier,type_de_donnees:this.model.type_de_donnees,intitule:this.model.intitule,numero_compte:this.model.numero_compte,type_de_fichier:this.model.type_de_fichier,delimiteur_enregistrement:this.model.delimiteur_enregistrement,delimiteur_champ:this.model.delimiteur_champ,origine_fichier:this.model.origine_fichier,nombre_de_decimales:this.model.nombre_de_decimales,separateur_decimales:this.model.separateur_decimales,cadrage:this.model.cadrage,separateur_miliers:this.model.separateur_miliers,caractere_remplissage:this.model.caractere_remplissage,debut_enregistrement:this.model.debut_enregistrement,entete_du_fichier:this.model.entete_du_fichier,id_comptable:this.model.id_comptable,id_societe :1}
      this.serv_shared.UpdateAll(obj,"plan_comptable");
    }
   // alert(obj)
    //

  }
  getsociete(event:any){
    this.nom_societe = event.target.options[event.target.options.selectedIndex].text;
    this.id_societe =(event.target.value);

  }

}

