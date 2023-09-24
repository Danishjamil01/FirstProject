import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isUserValid:boolean=false;

  constructor(public redirect: Router, private loginAuth:AuthService) {

  }


  GoToRegister() {
    this.redirect.navigateByUrl('register')
  }



  loginForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    pwd: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });

  get Email(): FormControl {
    return this.loginForm.get("email") as FormControl;
  }
  get Pwd(): FormControl {
    return this.loginForm.get("pwd") as FormControl;
  }






  
  loginSubmitted(){
    this.loginAuth.loginUser([this.loginForm.value.email ||'', 
      this.loginForm.value.pwd || ''
    ]).subscribe((res) =>{
      if(res == 'Failure'){
        this.isUserValid = false;
        alert('Login UnSuccessful')
      }
      else{
        this.isUserValid = true;
        alert('Login Successful');
        this.redirect.navigateByUrl('userdetails');
        
      }
    });
  }
}
