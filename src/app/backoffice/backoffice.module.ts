import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderbackComponent } from './components/headerback/headerback.component';
import { StudentComponent } from './components/student/student.component';
import { ClasseComponent } from './components/classe/classe.component';
import { IndexComponent } from './components/index/index.component';
import {BackofficeRoutingModule} from "./backoffice-routing.module";
import {SharedModule} from "../shared/shared.module";
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderbackComponent,
    StudentComponent,
    ClasseComponent,
    IndexComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    SharedModule
  ]
})
export class BackofficeModule { }
