import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PopupComponent } from "./popup/popup.component";
import { HttpClientModule } from "@angular/common/http";
import { PagesModule } from "./pages/pages.module";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ComponentsModule } from "./components/components.module";
import { FormsModule } from "@angular/forms";
import { NotfoundComponent } from "./pages/notfound/notfound.component";
import { LayoutComponent } from "./layout/original-layout/layout.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    NotfoundComponent,
    LayoutComponent,
    // NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    PagesModule,
    ComponentsModule,
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
