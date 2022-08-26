import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports:[
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
