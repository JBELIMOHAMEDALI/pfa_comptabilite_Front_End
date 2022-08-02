import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations:[NotfoundComponent],exports:[NotfoundComponent],

  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  // providers:[{
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:TokenInterceptorService,
  //   multi:true
  // }],
})
export class PagesModule { }
