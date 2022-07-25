import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { DashboardDefaultComponent } from './pages/dashboard/dashboard-default/dashboard-default.component';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { PopupComponent } from './popup/popup.component';
import { TesttestComponent } from './pages/testtest/testtest.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListSocieteComponent } from './pages/societe/list-societe/list-societe.component';
import { AddUpdateSocieteComponent } from './pages/societe/add-update-societe/add-update-societe.component';
import { ListPlanComptableComponent } from './pages/plan_comptable/list-plan-comptable/list-plan-comptable.component';
import { AddPlanComptableComponent } from './pages/plan_comptable/add-plan-comptable/add-plan-comptable.component';
import { UpdatePlanComptableComponent } from './pages/plan_comptable/update-plan-comptable/update-plan-comptable.component';
import { DeleteAllFromTabComponent } from './pages/delete_all/delete-all-from-tab/delete-all-from-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SigninComponent,
    DashboardDefaultComponent,
    SimplePageComponent,
    HomePageComponent,
    ProfileComponent,
    PopupComponent,
    TesttestComponent,
    ListSocieteComponent,
    AddUpdateSocieteComponent,
    ListPlanComptableComponent,
    AddPlanComptableComponent,
    UpdatePlanComptableComponent,
    DeleteAllFromTabComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
    //HomePageComponent
    //BreadcrumbsComponent
    //SigninComponent,
    //BasicLoginComponent,
    //DashboardDefaultComponent
  ],
  entryComponents: [PopupComponent,AddPlanComptableComponent,UpdatePlanComptableComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
