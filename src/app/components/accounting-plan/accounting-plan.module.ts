import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingPlanRoutingModule } from './accounting-plan-routing.module';
import { AccountingPlanComponent } from './accounting-plan.component';


@NgModule({
  declarations: [AccountingPlanComponent],
  imports: [
    CommonModule,
    AccountingPlanRoutingModule
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AccountingPlanModule { }
