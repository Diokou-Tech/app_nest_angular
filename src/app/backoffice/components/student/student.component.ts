import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() { }
  inputClass="border-3 focus:border-4 w-full transition ease-in-out focus:outline-none p-1 border rounded-lg border-cyan-400";  

  ngOnInit(): void {
  }

}
