import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  exports:[
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
