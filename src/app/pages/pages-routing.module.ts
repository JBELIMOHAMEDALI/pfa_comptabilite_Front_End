import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";
import { NotfoundComponent } from "./notfound/notfound.component";

// const routes: Routes = [
//   {
//     path: "dashboard",
//     loadChildren: () =>
//       import("./dashboard/dashboard.module").then(
//         (m) => m.DashboardModule
//       ),
//   },
//   {
//     path: "",
//     loadChildren: () =>
//       import("./dashboard/dashboard.module").then(
//         (m) => m.DashboardModule
//       ),
//     children: [
//       {
//         path: "accounting/plan",
//         loadChildren: () =>
//           import("./accounting-plan/accounting-plan.module").then(
//             (m) => m.AccountingPlanModule
//           ),
//       },
//       {
//         path: "tax",
//         loadChildren: () =>
//           import("./tax/tax.module").then((m) => m.TaxModule),
//       },
//       {
//         path: "company",
//         loadChildren: () =>
//           import("./company/company.module").then((m) => m.CompanyModule),
//       },
//       {
//         path: "third/party",
//         loadChildren: () =>
//           import("./third-party/third-party.module").then(
//             (m) => m.ThirdPartyModule
//           ),
//       },
//     ],
//   },
//   {
//     path: '',
//     redirectTo: '',
//     pathMatch: 'full'
//   },
//   {
//     path: "**",
//     component:NotfoundComponent
//   },
// ];
const routes: Routes = [

  {
    path: "signin",
    loadChildren: () =>
      import("./auth/signin/signin.module").then((m) => m.SigninModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./auth/signup/signup.module").then((m) => m.SignupModule),
  },
  {
    path: "account/:hashedid",
    loadChildren: () =>
      import("./verif-account/verif-account.module").then((m) => m.VerifAccountModule),
  },
  {
    path: "",
    redirectTo: "/signin",
    pathMatch: "full",
  },
  {
    path: "**",
    component: NotfoundComponent,
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
