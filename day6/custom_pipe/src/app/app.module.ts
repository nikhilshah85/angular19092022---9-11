import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { GreetingsPipe } from './pipes/greetings.pipe';
import { EmpbonusPipe } from './pipes/empbonus.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    GreetingsPipe,
    EmpbonusPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
