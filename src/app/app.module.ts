import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder } from "@angular/forms";
import { AuthModule } from "./pages/auth/auth.module";
import { NotPermissionComponent } from './pages/not-permission/not-permission.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./interceptor/token.interceptor";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterModule} from "@angular/router";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import {ChatModule} from "./pages/chat/chat.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    NotFoundComponent,
    NotPermissionComponent,
  ],
  imports: [
    AuthModule,
    ChatModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  providers: [
    FormBuilder,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
