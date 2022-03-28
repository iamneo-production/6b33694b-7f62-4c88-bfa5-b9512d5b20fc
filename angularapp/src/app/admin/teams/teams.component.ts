/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamModel } from './team.model';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teams!:TeamModel[];
searchString='';
  constructor(private service :TeamsService, private route: Router) { }

  ngOnInit(): void {
    this.getTeams();
  }
  getTeams(){
    this.service.getTeams().subscribe(data=>{
      this.teams=data;
    });

  }
  updateTeam(index:number)
  {
    this.service.edit=this.teams[index];
    this.service.test();
    this.route.navigate(['admin/editTeam'])

  }
  deleteTeam(index:number)
  {
    this.service.delete=this.teams[index];
    this.route.navigate(['admin/deleteTeam'])
  }

}