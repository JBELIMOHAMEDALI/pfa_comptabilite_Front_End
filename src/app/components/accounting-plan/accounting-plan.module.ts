import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingPlanRoutingModule } from './accounting-plan-routing.module';
import { AccountingPlanComponent } from './accounting-plan.component';


@NgModule({
  declarations: [AccountingPlanComponent],
  imports: [
    CommonModule,
    AccountingPlanRoutingModule
  ]
})
export class AccountingPlanModule { }
