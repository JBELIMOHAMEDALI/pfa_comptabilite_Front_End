import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './../../../service/login-service.service';
import swal from 'sweetalert';
import { NgForm } from '@angular/forms';
@NgModule()
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})

export class SigninComponent implements OnInit {


  constructor(private route: Router, private login_service:LoginServiceService) { }

  ngOnInit() {
  }
  async onSignin(f:NgForm) {
    //console.log(f.value.email.toString(),f.value.password.toString())

    this.login_service.login_fn(f.value.email.toString(),f.value.password.toString()).subscribe((data) => {
      console.log(data)
      const dataRes=data;
      this.route.navigate(['/dashboard']);
      // const donne: any = data;
      // const err = donne.error;
      // const mayUser = donne;
      // // alert(JSON.stringify(mayUser));
      // if (!err) {
      //   if (mayUser['type_user'] == 1) {
      //     const nom_prenom = (donne.nom + " " + donne.prenom).toString();
      //     localStorage.setItem('id_user', JSON.stringify(donne.id_user));
      //     localStorage.setItem('type', "admin");
      //     localStorage.setItem('nomuser', nom_prenom);
      //     this.route.navigate(['/dashboard']);
      //   }else if (mayUser['type_user'] == 2){
      //     const nom_prenom = (donne.nom + " " + donne.prenom).toString();
      //     localStorage.setItem('id_user', JSON.stringify(donne.id_user));
      //     localStorage.setItem('type', "o");
      //     localStorage.setItem('nomuser', nom_prenom);
      //     this.route.navigate(['/dashboard']);
      //   }else {
      //     const nom_prenom = JSON.stringify(donne.nom + " " + donne.prenom);
      //     localStorage.setItem('id_user', JSON.stringify(donne.id_user));
      //     localStorage.setItem('type', "p");
      //     localStorage.setItem('nomuser', nom_prenom);

      //     this.route.navigate(['/dashboard'])
      //   }
      // } else {
      // }
    },(error)=>{
              swal('warning', error.error.message, 'warning')

    });
  }
}