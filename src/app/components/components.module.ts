import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ComponentsModule { }
