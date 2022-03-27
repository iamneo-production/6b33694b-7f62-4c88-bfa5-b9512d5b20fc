import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'venueSearch'
})
export class VenueSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
