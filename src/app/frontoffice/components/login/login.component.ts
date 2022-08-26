import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { AuthService } from 'src/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private readonly authService:AuthService, private readonly apollo:Apollo) { }

  inputClass="border-3 focus:border-4 w-full transition ease-in-out focus:outline-none p-3 border rounded-5 border-cyan-400";  
 
  ngOnInit(): void {
    console.log('init login');
  }
  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });
  showPWD = new FormControl(false);
  rememberMe = new FormControl(false);
  
  async login(){
    alert('ok');
    this.resetForm();
  }
  resetForm(){
    this.loginForm =new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
    });
  }

  ngOnDestroy(): void {
  }
}
