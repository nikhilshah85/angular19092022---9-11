import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empbonus'
})
export class EmpbonusPipe implements PipeTransform {

 
  // transform(value:number, rate:number)
  // {
  //   return value * (rate / 100);
  // }


  transform(value:number, rate:number, designation:string)
  {
    if(designation == 'Sales')
    {
      return value * (rate / 100) + 400;
    }
    else if(designation == "Accounts")
    {
      return value * (rate / 100) +  2000;
    }    
     return value * (rate / 100) + 50;
  }

  // {{ empSalary | empBonus : 15 | 'HR '}}

}
