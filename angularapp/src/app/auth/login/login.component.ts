import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginF!: FormGroup
  auth!: boolean;
  user!: string;
  constructor(private routes: Router, private authservice: AuthenticationService) { }
//This gets the credentials form the users
  ngOnInit(): void {
    this.LoginF = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9_@#$!?></|+*]{8,12}")])
    })
  }
  //Navigate to Signup page
  toSignUp() {
    this.routes.navigate(['signup']);
  }
  tohome() {
    // this.routes.navigate(['homepage']);
    let _email = this.LoginF.get('email')?.value;
    let _password = this.LoginF.get('password')?.value;
//~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!!!!!!~~~~~~~~~~~~~~~~`
this.authservice.getUserEmail(_email);
//~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!!!!!!~~~~~~~~~`~~~~~~~~~~~`
    //Admin Check
    if (_email === 'admin@gmail.com') {

      this.authservice.AdminCheck(_email, _password).subscribe(data => {
        this.auth = data.allowed;
        this.authservice.adminlogin=this.auth;
              });
      //Navigation after authentication
      setTimeout(() => {
        if (this.auth) { 
          this.routes.navigate(['../admin/view'])
        }
        else {
          alert("Access Denied")
        }
      }, );
    }
    //Authentication for Customer using the loginCheck 
    else {
      this.authservice.LoginCheck(_email, _password).subscribe(data => {
        this.auth = data.allowed;
        this.user = data.user;
        this.authservice.allowlogin=this.auth;

      });
      
      //Navigate after validation
      setTimeout(() => {
        if (this.auth) {
          this.routes.navigate(["user", "homepage"]);
        } else {
          alert("User Not Found");
        }
      }, );

    }

  }

}
