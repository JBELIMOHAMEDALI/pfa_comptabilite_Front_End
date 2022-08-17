import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { CustomerManagementComponent } from './customer-management.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CustomerManagementComponent],
  imports: [
    CommonModule,
    CustomerManagementRoutingModule,
    NgbModule
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class CustomerManagementModule { }
