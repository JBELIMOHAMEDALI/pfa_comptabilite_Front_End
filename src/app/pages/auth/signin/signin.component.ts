import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
// import { SharedServiceService } from "../../../services/shared-service.service";
import swal from "sweetalert";
// import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor(
    // private authService: AuthService,
    // private sharedService: SharedServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  async login(form: NgForm) {
    const payload = { ...form.value };
    // try {
    //   const { err, id_role, token } = (await this.authService.login(
    //     payload
    //   )) as any;
    //   if (!err) {
    //     this.sharedService.setCookie("token", token, 7);
    //     this.sharedService.setCookie("id_role", id_role, 9999);
    //     switch (id_role) {
    //       case 1:
    //         this.router.navigate(["/etudiant"]);
    //         break;
    //       case 2:
    //         this.router.navigate(["/entreprise"]);
    //         break;

    //     }
    //   }
    // } catch (error) {
    //   swal("Echec!", error.error.message, "error");
    // }
  }
}
