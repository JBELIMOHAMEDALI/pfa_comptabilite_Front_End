import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ResetPwdComponent } from "./auth/reset-pwd/reset-pwd.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { VerifAccountComponent } from "./auth/verif-account/verif-account.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [

      {
        path: "home",
        component: HomeComponent,
      },

      {
        path: "about",
        component: AboutComponent,
      },
      {
        path: "contact",
        component: ContactComponent,
      },

      {
        path: "signin",
       component:SigninComponent
      },
      {
        path: "signup",
        component:SignupComponent

      },
      {
        path: "account/:hashedid",
        component:VerifAccountComponent
      },
      {
        path: "reset/password",
        component:ResetPwdComponent
      },
      // {
      //   path: "redirection",
      //   component:RedirectionComponent
      // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
