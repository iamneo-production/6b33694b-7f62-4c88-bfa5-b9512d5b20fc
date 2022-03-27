import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamSearch'
})
export class TeamSearchPipe implements PipeTransform {

  transform(value: any,searchString:string){
    if(value.length===0 || searchString===""){
      return value;
    }

    const teams=[];
    for(const team of value){
      // if(venue['venueName'].toLowerCase()===searchString.toLowerCase()){
      if(team['teamName'].toLowerCase().includes(searchString.toLocaleLowerCase())){
        teams.push(team);
      }
    }
    return teams;
  }

}