import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from "./components/student/student.component";
import {ClasseComponent} from "./components/classe/classe.component";
import {IndexComponent} from "./components/index/index.component";


const routes: Routes = [
  {path: '', component: IndexComponent,
    children:[
      {path : 'student', component: StudentComponent },
      {path: 'classe', component: ClasseComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
