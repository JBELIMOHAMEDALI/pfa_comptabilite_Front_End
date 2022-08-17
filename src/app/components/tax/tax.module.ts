import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxRoutingModule } from './tax-routing.module';
import { TaxComponent } from './tax.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [TaxComponent],
  imports: [
    CommonModule,
    TaxRoutingModule,
    NgbModule
  ],  schemas:[NO_ERRORS_SCHEMA]

})
export class TaxModule { }
