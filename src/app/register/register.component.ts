import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  repeatPass: string = 'none';
  displayMsg: string = '';
  isAccountCreated: boolean = false;
  ngOnInit(): void {

  }

  goToLogin() {
    this.redirect.navigateByUrl('login');
  }
  constructor(private redirect: Router, private authservice: AuthService) {

  }


  registerForm = new FormGroup({
    firstname: new FormControl("",
      [Validators.required,
      Validators.minLength(2),
      Validators.pattern("[a-zA-Z].*")
      ]),

    lastname: new FormControl("",
      [Validators.required,
      Validators.minLength(2),
      Validators.pattern("[a-zA-Z].*")
      ]),

    email: new FormControl("",
      [Validators.required,
      Validators.email]),

    mobile: new FormControl("",
      [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("[0-9]*")
      ]),


    pwd: new FormControl("",
      [Validators.required,
      Validators.maxLength(15),
      Validators.minLength(6)
      ]),


    rpwd: new FormControl("")
  });

  registerSubmitted() {
    if (this.Pwd.value == this.Rpwd.value) {
      console.log(this.registerForm.valid);
       this.repeatPass = 'none';

      this.authservice.registerUser([
        this.registerForm.value.firstname || '',
        this.registerForm.value.lastname || '',
        this.registerForm.value.email || '',
        this.registerForm.value.mobile || '',
        this.registerForm.value.pwd || '',
      ])
      .subscribe(res => {
        if ((res) == 'Success') {
          this.displayMsg = 'Account Created Successfully!';
          this.isAccountCreated = true;
        }
        else if (res == 'Already Exist') {
          this.displayMsg = 'Account already exist. try another email';
          this.isAccountCreated = false;
        }
        else {
          this.displayMsg = 'Something went wrong';
          this.isAccountCreated = false;
        }

      });
    }
    else {
      this.repeatPass = 'inline'
    }
  }

  get FirstName(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }
  get LastName(): FormControl {
    return this.registerForm.get("lastname") as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }
  get Mobile(): FormControl {
    return this.registerForm.get("mobile") as FormControl;
  }
  get Pwd(): FormControl {
    return this.registerForm.get("pwd") as FormControl;
  }
  get Rpwd(): FormControl {
    return this.registerForm.get("pwd") as FormControl;
  }


}
