import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { UserModel } from 'src/app/shared/user.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SignUp!: FormGroup;
  user=['user','admin'];
  auth!:boolean;
  userType:string='';
  constructor(private authservice: AuthenticationService ,private routes: Router) { }
  // let btn=document.getElementById("btn");
 
  ngOnInit(): void {
    this.SignUp= new FormGroup({
      // "users": new FormControl(null,Validators.required),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "username": new FormControl(null,[Validators.required,Validators.pattern("[a-zA-Z0-9_]{8,12}")]),
      "mobile": new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      "password": new FormControl(null,Validators.required),
      "confirmpass": new FormControl(null,[Validators.minLength(8),Validators.maxLength(16)])
    })
    
  }
//Match the Confrm Password
PassMatch: boolean=false;
//Check for Match
PassCheck(){
  let pass=this.SignUp.get('password')?.value;
  let cpass=this.SignUp.get('confirmpass')?.value;
  console.log(typeof(pass)+"  "+pass.length)
  if(pass.length>=8 && cpass.length >=8){
    if(pass === cpass)
    {
      this.PassMatch=true;
    }
    else{
      this.PassMatch=false;
    }
  }
  else{
    this.PassMatch=false
  }
}
signUp()
  {
    const body : UserModel = {
      email : this.SignUp.get('email')?.value,
      password : this.SignUp.get('password')?.value,
      username : this.SignUp.get('username')?.value,
      mobileNumber : this.SignUp.get('mobile')?.value,
      userRole : this.userType
  }
  //Post the value to UserModel
  console.log(body);
  this.authservice.SignUpCustomer(body).subscribe(data=>{
    console.log(data);
    this.auth=data.allowed;
    // if(this.auth)
    // {
    //   this.authservice.route.navigate(['user','homepage']);

    // }
  });
setTimeout(()=>{
  this.authservice.route.navigate(['../login'])
},100)
  }
  toLogin(){
    this.routes.navigate(['login']);
  }
  users(elem :HTMLElement)
  {
    this.userType="user";
    elem.style.left='0'
  }
  admin(elem:HTMLElement)
  {
    this.userType="admin";
    elem.style.left='60px'
  }
}