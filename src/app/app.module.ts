import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PagesModule } from "./pages/pages.module";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ComponentsModule } from "./components/components.module";
import { FormsModule } from "@angular/forms";
import { NotfoundComponent } from "./pages/notfound/notfound.component";
import { LayoutComponent } from "./layout/original-layout/layout.component";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { PopupModule } from "./popup/popup.module";

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LayoutComponent,
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
    PopupModule,
  ],
  //seulement les interfaces qui declenchent pop up
  schemas: [NO_ERRORS_SCHEMA],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
