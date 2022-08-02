import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdPartyComponent } from './third-party.component';

const routes: Routes = [{ path: '', component: ThirdPartyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdPartyRoutingModule { }
