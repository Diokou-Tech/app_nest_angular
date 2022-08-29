import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchUsersGQL, LoginGQL } from 'src/generated/graphql';
import { AuthService } from 'src/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private readonly authService:AuthService,
    private readonly fetchUsers:FetchUsersGQL,
    private readonly loginGql: LoginGQL,
    private readonly router:Router
    ) { }
  usersList:any;
  inputClass="border-3 focus:border-4 w-full transition ease-in-out focus:outline-none p-3 border rounded-5 border-cyan-400";  
 
  ngOnInit(): void {
    const isLogin = localStorage.getItem('isLogin');
    isLogin === 'true' ? this.router.navigate(['/backoffice']) : '';
  }
  
  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });
  showPWD = new FormControl(false);
  rememberMe = new FormControl(false);
  isLoading = false;

  async login(){
    this.progressBar();
    let data = this.loginForm.value;
    this.loginGql.mutate({loginInput: {email: data.email ?? '',password: data.password ?? ''}}).subscribe(
      (result) =>{
        this.progressBar();
        this.logger(result.data?.login);
      },
      (error)=>{
        console.log(error.message);
        Swal.fire({
          icon: 'error',
          text: 'Erreur ' + error.message,
          toast: true,
          width:450,
          position: 'top-end',
          confirmButtonAriaLabel: 'D\'accrord',
        });
        this.progressBar();
      }
    )
  }

  logger(data:any){
    localStorage.setItem('token',data.token);
    localStorage.setItem('isLogin','true');
    localStorage.setItem('user',JSON.stringify(data.user));
    this.router.navigate(["/backoffice"]);
  }

  resetForm(){
    this.loginForm =new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
    });
  }

  progressBar() :void {
    this.isLoading = !this.isLoading;
  }
  ngOnDestroy(): void {
  }
}
