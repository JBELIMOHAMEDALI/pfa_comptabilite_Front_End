import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdservRoutingModule } from './prodserv-routing.module';
import { ProdservComponent } from './prodserv.component';


@NgModule({
  declarations: [ProdservComponent],
  imports: [
    CommonModule,
    ProdservRoutingModule
  ]
})
export class ProdservModule { }
