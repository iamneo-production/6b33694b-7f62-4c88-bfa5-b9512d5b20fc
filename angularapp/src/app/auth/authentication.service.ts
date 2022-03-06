import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminResponseModel, ResponseModel } from '../shared/ResponseModel';
import { UserModel } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient, public route:Router) { }
API='https://localhost:5001/';

//Login check For Customer
LoginCheck(_email:string,_password:string):Observable<ResponseModel>{
  let Url=this.API+'user/login';
  const body={email: _email, password: _password}
  return this.http.post<ResponseModel>(Url,body);
}
//Check For Admins
AdminCheck(_email:string, _pass:string): Observable<AdminResponseModel>{
  let Url=this.API+'admin/login';
  const body={email: _email,password:_pass}
  return this.http.post<AdminResponseModel>(Url,body);
}
//Signup by getting the details from 
SignUpCustomer(body:UserModel): Observable<AdminResponseModel>{
  let Url =this.API+'user/signup';
  return this.http.post<AdminResponseModel>(Url,body);
}

}
 
