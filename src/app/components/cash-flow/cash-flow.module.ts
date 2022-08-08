import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashFlowRoutingModule } from './cash-flow-routing.module';
import { CashFlowComponent } from './cash-flow.component';


@NgModule({
  declarations: [CashFlowComponent],
  imports: [
    CommonModule,
    CashFlowRoutingModule
  ]
})
export class CashFlowModule { }
