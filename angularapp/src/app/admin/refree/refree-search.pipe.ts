import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refreeSearch'
})
export class RefreeSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
