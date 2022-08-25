import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {FrontOfficeModule} from "./frontoffice/front-office.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BackofficeModule} from "./backoffice/backoffice.module";
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FrontOfficeModule,
    BrowserAnimationsModule,
    BackofficeModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
