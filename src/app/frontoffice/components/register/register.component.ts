import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  inputClass="border-3 focus:border-4 w-full transition ease-in-out focus:outline-none p-3 border rounded-5 border-cyan-400";  
  register(){
    
  }
  ngOnInit(): void {
  }

}
