/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-team',
  templateUrl: './delete-team.component.html',
  styleUrls: ['./delete-team.component.css']
})
export class DeleteTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamModel } from '../team.model';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-delete-team',
  templateUrl: './delete-team.component.html',
  styles: [
  ]
})
export class DeleteTeamComponent implements OnInit {
  TeamForm!:FormGroup;
  deleteValue!:TeamModel
  constructor(private service:TeamsService, private route:Router) { }

  ngOnInit(): void {
    this.deleteValue=this.service.delete;
    this.TeamForm= new FormGroup(
      {
        _TeamId: new FormControl(this.deleteValue.teamId,Validators.required),
        _TeamName:new FormControl(this.deleteValue.teamName,Validators.required),
        _TeamImageUrl: new FormControl(this.deleteValue.imageUrl,Validators.required),
        _TeamDescription: new FormControl(this.deleteValue.teamDescription,Validators.required),
        _TeamLocation:new FormControl(this.deleteValue.location,Validators.required),
        _TeamPlayers: new FormControl(this.deleteValue.noOfPlayers,Validators.required)
      }
    );
    console.log(this.deleteValue);
  }
  deleteTeams()
  {
    let params=this.deleteValue.teamId;
    this.service.deleteTeam(params).subscribe(x=>{
      setTimeout(()=>{
        this.route.navigate(['admin/teams']);
      })
    })

  }
}
