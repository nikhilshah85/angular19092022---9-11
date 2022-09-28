import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetings'
})
export class GreetingsPipe implements PipeTransform {

  
  transform(value:string)
  {
    return 'Welcome to Angular ' + value; 
  }

}
