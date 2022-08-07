import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstCompanyRoutingModule } from './first-company-routing.module';
import { FirstCompanyComponent } from './first-company.component';


@NgModule({
  declarations: [FirstCompanyComponent],
  imports: [
    CommonModule,
    FirstCompanyRoutingModule
  ]
})
export class FirstCompanyModule { }
