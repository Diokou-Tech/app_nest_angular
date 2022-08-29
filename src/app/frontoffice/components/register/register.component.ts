import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterGQL } from 'src/generated/graphql';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private readonly registerGQL:RegisterGQL
  ) { }

  inputClass="border-3 focus:border-4 w-full transition ease-in-out focus:outline-none p-3 border rounded-5 border-cyan-400";  
  isLoading=false;
  registerForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
  })

  register(){
    this.barProgress();
    const data = this.registerForm.value;
    if(this.isValidForm()){
      this.registerGQL
      .mutate({ registerinput: {
        "email" : data.email ?? '',
        "name" : data.nom ?? '',
        "lastname" : data.prenom ?? '',
        "password" : data.password ?? '',
        "role" : "USER"
      }}).subscribe(
        (result)=>{
          console.log(result);
          this.barProgress();
        },
        (error)=>{
          console.log(error);
          this.barProgress();
        }
      )
    }else{
      this.barProgress();
      Swal.fire({
        icon:"error",
        text: 'Les deux mots de passe ne correspondent pas',
        toast: true,
        position: 'top-end',
        width:500
      });
    }
  }
  ngOnInit(): void {
  }
  isValidForm() : Boolean
  {
    const data = this.registerForm.value;
    // verif password confirm 
    return this.registerForm.valid && data.password === data.confirm_password;
  }
  barProgress()
  {
    this.isLoading  = !this.isLoading;
  }
}
