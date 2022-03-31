import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authserve: AuthenticationService){}
  canActivate() {
    if(this.authserve.adminlogin || this.authserve.allowlogin)return true;
    else return false;
  }
  
}
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {
  constructor(private authserve: AuthenticationService){}
  canActivateChild() {
    if(this.authserve.adminlogin)return true;
    else return false;
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class CustomerGaurd implements CanActivateChild {
  constructor(private authserve: AuthenticationService){}
  canActivateChild() {
    if(this.authserve.allowlogin)return true;
    else return false;
  }
  
}
