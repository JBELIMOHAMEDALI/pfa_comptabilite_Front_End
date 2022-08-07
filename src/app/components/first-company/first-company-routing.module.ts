import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstCompanyComponent } from './first-company.component';

const routes: Routes = [{ path: '', component: FirstCompanyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstCompanyRoutingModule { }
