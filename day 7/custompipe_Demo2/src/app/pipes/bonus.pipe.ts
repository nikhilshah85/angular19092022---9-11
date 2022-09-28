import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonus'
})
export class BonusPipe implements PipeTransform {

  transform(value:number,designation:string)
  {
    if(designation == 'Sales')
    {
      return value * 8/100;
    }
  return value * 12 / 100;
  }

}
