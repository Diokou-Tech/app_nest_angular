import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  exports:[
    MatIconModule,
    MatInputModule,
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
