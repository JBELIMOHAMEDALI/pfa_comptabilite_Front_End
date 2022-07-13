import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { SigninComponent } from "./pages/auth/signin/signin.component";
import { DashboardDefaultComponent } from "./pages/dashboard/dashboard-default/dashboard-default.component";
import { SimplePageComponent } from "./pages/simple-page/simple-page.component";
import { ProfileComponent } from "./pages/user/profile/profile.component";

const routes: Routes = [
  // {
  //   path: '',
  //   component: SigninComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'dashboard',
  //       pathMatch: 'full'
  //     }, {
  //       path: 'dashboard',
  //       loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
  //     }, {
  //       path: 'basic',
  //       loadChildren: () => import('./pages/ui-elements/basic/basic.module').then(m => m.BasicModule)
  //     }, {
  //       path: 'notifications',
  //       loadChildren: () => import('./pages/ui-elements/advance/notifications/notifications.module').then(m => m.NotificationsModule)
  //     }, {
  //       path: 'bootstrap-table',
  //       loadChildren: () => import('./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module').then(m => m.BasicBootstrapModule),
  //     }, {
  //       path: 'map',
  //       loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
  //     }, {
  //       path: 'user',
  //       loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule)
  //     }, {
  //       path: 'simple-page',
  //       loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)
  //     }, {
  //       path: 'signin',
  //       component: SigninComponent
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   component: AuthComponent,
  //   children: [
  //     {
  //       path: 'authentication',
  //       loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  //     }
  //   ]
  // }
  { path: "", component: SigninComponent },
  { path: "signin", component: SigninComponent },
  {
    path: "dashboard",
    component: HomePageComponent,
    children: [
      {
        path: '', component: DashboardDefaultComponent
      },
      {
        path: "profil",
        component: ProfileComponent,
      },
      // { path: "admin", component: AdminComponent },
      { path: "simple", component: SimplePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
