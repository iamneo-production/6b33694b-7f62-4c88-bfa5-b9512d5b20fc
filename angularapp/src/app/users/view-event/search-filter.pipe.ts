import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any,searchString:string){
    if(value.length===0 || searchString===""){
      return value;
    }

    const venues=[];
    for(const venue of value){
      // if(venue['venueName'].toLowerCase()===searchString.toLowerCase()){
      if(venue['venueName'].toLowerCase().includes(searchString.toLocaleLowerCase())){
        venues.push(venue);
      }
    }
    return venues;
  }

}
