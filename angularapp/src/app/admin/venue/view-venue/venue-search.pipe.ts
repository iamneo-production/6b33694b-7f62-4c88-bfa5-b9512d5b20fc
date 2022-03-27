import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refreeSearch'
})
export class RefreeSearchPipe implements PipeTransform {

  transform(value: any,searchString:string){
    if(value.length===0 || searchString===""){
      return value;
    }

    const refrees=[];
    for(const refree of value){
      // if(venue['venueName'].toLowerCase()===searchString.toLowerCase()){
      if(refree['teamName'].toLowerCase().includes(searchString.toLocaleLowerCase())){
        refrees.push(refree);
      }
    }
    return refrees;
  }

}