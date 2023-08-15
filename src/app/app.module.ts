import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AuthService} from "./services/auth.service";
import {TokenInterceptor} from "./token.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";


export function kcFactory(keycloakService: AuthService) {
  return () => keycloakService.init();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [  {
    provide: APP_INITIALIZER,
    useFactory: kcFactory,
    deps: [AuthService],
    multi: true
  },  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
