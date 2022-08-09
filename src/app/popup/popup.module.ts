import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { PostComponent } from './post/post.component';
import { PutComponent } from './put/put.component';



@NgModule({
  declarations: [
    DeleteComponent,
    PostComponent,
    PutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  entryComponents : [
    DeleteComponent,
    PostComponent,
    PutComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],

})
export class PopupModule { }
