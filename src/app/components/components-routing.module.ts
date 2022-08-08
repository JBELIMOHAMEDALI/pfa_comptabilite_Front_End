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
        loadChildren: () => import("./company/company.module").then((m) => m.CompanyModule),
      },
      {
        path: "sales",
        children: [
          {
            path: 'invoices',
            loadChildren: () => import('./sales/invoices/invoices.module').then(m => m.InvoicesModule)
          },
          {
            path: 'prod-serv',
            loadChildren: () => import('./sales/prodserv/prodserv.module').then(m => m.ProdservModule)
          },
          {
            path: 'customers',
            loadChildren: () => import('./sales/customers/customers.module').then(m => m.CustomersModule)
          },
        ]
      },
      {
        path: "expenses",
        children: [
          {
            path: 'transactions',
            loadChildren: () => import('./expenses/transactions/transactions.module').then(m => m.TransactionsModule)
          },
          {
            path: 'prodserv',
            loadChildren: () => import('./expenses/prodserv/prodserv.module').then(m => m.ProdservModule)
          },
          {
            path: 'suppliers',
            loadChildren: () => import('./expenses/suppliers/suppliers.module').then(m => m.SuppliersModule)
          },
        ]
      },
      {
        path: 'cash-flow',
        loadChildren: () => import('./cash-flow/cash-flow.module').then(m => m.CashFlowModule)
      },
      {
        path: 'employees',
        loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
      },
      {
        path: 'customer-management',
        loadChildren: () => import('./customer-management/customer-management.module').then(m => m.CustomerManagementModule)
      },

    ],
  },

  {
    path: "app",
    children: [
      {
        path: "redirection/:accessToken",
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
export class ComponentsRoutingModule { }
