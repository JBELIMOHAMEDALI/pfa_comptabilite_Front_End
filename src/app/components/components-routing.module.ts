import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "../layout/original-layout/layout.component";
import { NotfoundComponent } from "../pages/notfound/notfound.component";

const routes: Routes = [
  {
    path: "app",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "accounting/plan",
        loadChildren: () =>
          import("../components/accounting-plan/accounting-plan.module").then(
            (m) => m.AccountingPlanModule
          ),
      },
      {
        path: "tax",
        loadChildren: () => import("./tax/tax.module").then((m) => m.TaxModule),
      },
      {
        path: "company",
        loadChildren: () =>
          import("./company/company.module").then((m) => m.CompanyModule),
      },
      {
        path: "third/party",
        loadChildren: () =>
          import("./third-party/third-party.module").then(
            (m) => m.ThirdPartyModule
          ),
      },
    ],
  },

  {
    path: "app",
    children: [
      {
        path: "redirection",
        loadChildren: () =>
          import("./redirection/redirection.module").then(
            (m) => m.RedirectionModule
          ),
      },
      {
        path: "firstcompany",
        loadChildren: () =>
          import("./first-company/first-company.module").then(
            (m) => m.FirstCompanyModule
          ),
      },
    ],
  },

  {
    path: "",
    redirectTo: "/home",
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
export class ComponentsRoutingModule {}
