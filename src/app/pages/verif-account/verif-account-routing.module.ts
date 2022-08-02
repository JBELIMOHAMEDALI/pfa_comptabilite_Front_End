import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifAccountComponent } from './verif-account.component';

const routes: Routes = [{ path: '', component: VerifAccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifAccountRoutingModule { }
