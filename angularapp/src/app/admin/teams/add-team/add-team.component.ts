/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamModel } from '../team.model';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  TeamForm!:FormGroup;
  constructor(private service:TeamsService, private route:Router) { }

  ngOnInit(): void {
    this.TeamForm= new FormGroup(
      {
        _TeamId: new FormControl(null,Validators.required),
        _TeamName:new FormControl(null,Validators.required),
        _TeamImageUrl: new FormControl(null,Validators.required),
        _TeamDescription: new FormControl(null,Validators.required),
        _TeamLocation:new FormControl(null,Validators.required),
        _TeamPlayers: new FormControl(null,Validators.required)
      }
    );
    
  }
  addTeams(){
    const body:TeamModel={
      teamId:this.TeamForm?.get('_TeamId')?.value,
      teamName:this.TeamForm?.get('_TeamName')?.value,
      teamDescription:this.TeamForm?.get('_TeamDescription')?.value,
      imageUrl:this.TeamForm?.get('_TeamImageUrl')?.value,
      noOfPlayers:this.TeamForm?.get('_TeamPlayers')?.value,
      location:this.TeamForm?.get('_TeamLocation')?.value
    }
    
    this.service.addTeam(body).subscribe(x=>{
      console.log(body);
     

      setTimeout(()=>{
        this.route.navigate(['admin/teams']);
      })
    })
  }
}
