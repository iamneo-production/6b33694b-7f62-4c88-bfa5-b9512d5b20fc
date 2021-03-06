import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerModel } from './player.model';
import { TeamModel } from './team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
// teams!:TeamModel[];
readonly APIUrl = "https://8080-efafafbdbdafeecbadcecbdfcbdfeeeb.examlyiopb.examly.io/api/Team/"
  constructor(private http:HttpClient) { }
  getTeams():Observable<TeamModel[]>
  {
    
return this.http.get<TeamModel[]>("https://8080-efafafbdbdafeecbadcecbdfcbdfeeeb.examlyiopb.examly.io/api/Team/getTeam")
  }
  edit!:TeamModel;
  editTeam(params:number,body:TeamModel):Observable<TeamModel>
  {
    let URL=this.APIUrl+"editTeam/";
   return  this.http.put<TeamModel>(URL+params,body)
  }
  test(){
    return console.log(this.edit);
  }
  addTeam(body:TeamModel):Observable<TeamModel>{
    let Url=this.APIUrl+'addTeam/';
    return this.http.post<TeamModel>(Url,body);

  }
  delete!:TeamModel;
  deleteTeam(params:number):Observable<TeamModel>{
    let Url=this.APIUrl+"deleteTeam/";
    return this.http.delete<TeamModel>(Url+params);
  }
  addPlayer(body:PlayerModel):Observable<PlayerModel>{
    let Url=this.APIUrl+'addPlayer/';
    return this.http.post<PlayerModel>(Url,body);
  }
  getPlayer():Observable<PlayerModel[]>
  {
    return this.http.get<PlayerModel[]>("https://8080-efafafbdbdafeecbadcecbdfcbdfeeeb.examlyiopb.examly.io/api/Player/addPlayer")
  }

  getPlayers(params:number):Observable<PlayerModel[]>{
    let Url="https://8080-efafafbdbdafeecbadcecbdfcbdfeeeb.examlyiopb.examly.io/api/Player/getPlayers/";
    return this.http.get<PlayerModel[]>(Url+params);
  }
}
