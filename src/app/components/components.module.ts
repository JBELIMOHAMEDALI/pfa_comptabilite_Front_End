import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentsRoutingModule } from './components-routing.module';



@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  // providers:[{
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:TokenInterceptorService,
  //   multi:true
  // }],
})
export class ComponentsModule { }
