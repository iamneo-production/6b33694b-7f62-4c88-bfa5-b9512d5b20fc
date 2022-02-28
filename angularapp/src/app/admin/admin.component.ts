import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authser: AuthenticationService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authser.route.navigate(['login']);
  }
}
