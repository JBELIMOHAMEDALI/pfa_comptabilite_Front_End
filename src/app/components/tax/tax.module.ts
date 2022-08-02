import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxRoutingModule } from './tax-routing.module';
import { TaxComponent } from './tax.component';


@NgModule({
  declarations: [TaxComponent],
  imports: [
    CommonModule,
    TaxRoutingModule
  ],  schemas:[NO_ERRORS_SCHEMA]

})
export class TaxModule { }
