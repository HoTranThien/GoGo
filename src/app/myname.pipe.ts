import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myname'
})
export class MynamePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return (value[0]+value[1]).toUpperCase();
  }

}
