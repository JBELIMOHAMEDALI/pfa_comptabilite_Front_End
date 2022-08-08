import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstCompanyRoutingModule } from './first-company-routing.module';
import { FirstCompanyComponent } from './first-company.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FirstCompanyComponent],
  imports: [
    CommonModule,
    FirstCompanyRoutingModule,
    FormsModule
  ]
})
export class FirstCompanyModule { }
