import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifAccountRoutingModule } from './verif-account-routing.module';
import { VerifAccountComponent } from './verif-account.component';


@NgModule({
  declarations: [VerifAccountComponent],
  imports: [
    CommonModule,
    VerifAccountRoutingModule
  ]
})
export class VerifAccountModule { }
