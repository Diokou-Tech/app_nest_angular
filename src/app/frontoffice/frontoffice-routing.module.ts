import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./components/index/index.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ImageComponent} from './components/image/image.component';

const routes: Routes = [
  {path : '', component: IndexComponent,
  children: [
    {path: '', component: LoginComponent, title: 'Home - Login'},
    {path: 'login', component: LoginComponent,title: 'Home - Login'},
    {path: 'register', component: RegisterComponent, title: 'Home - Register'},
    {path: 'image', component: ImageComponent, title: 'Home - Image'}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }