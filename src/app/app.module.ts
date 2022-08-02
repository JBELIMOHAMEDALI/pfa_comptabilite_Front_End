import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PopupComponent } from "./popup/popup.component";
import { HttpClientModule } from "@angular/common/http";
import { PagesModule } from "./pages/pages.module";
import { LayoutComponent } from "./layout/layout.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ComponentsModule } from "./components/components.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    PagesModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,

  ],
  //seulement les interfaces qui declenchent pop up
  entryComponents: [
    PopupComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
