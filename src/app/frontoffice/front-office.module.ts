import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderFrontComponent } from './components/header-front/header-front.component';
import {FrontofficeRoutingModule} from "./frontoffice-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    HeaderFrontComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    SharedModule
  ]
})
export class FrontOfficeModule { }
