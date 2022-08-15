import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingPlanRoutingModule } from './accounting-plan-routing.module';
import { AccountingPlanComponent } from './accounting-plan.component';
import { ExcelService } from '../../services/excel.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AccountingPlanComponent],
  imports: [
    CommonModule,
    AccountingPlanRoutingModule,
    NgbModule
  ],
  providers:[ExcelService],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AccountingPlanModule { }
