import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import {AppComponent} from "./app.component";
import {FrontOfficeModule} from "./frontoffice/front-office.module";

const routes: Routes = [
  {
    path: "frontoffice",
    loadChildren: () => import ("./frontoffice/front-office.module").then(m => m.FrontOfficeModule)
  },
  {
    path: 'backoffice',
    loadChildren: () => import("./backoffice/backoffice.module").then(m => m.BackofficeModule ),
    canActivate: [AuthGuard]
  },
  {path: "**", redirectTo: 'frontoffice',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
