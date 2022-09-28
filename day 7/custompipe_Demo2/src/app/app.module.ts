import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SalutationPipe } from './pipes/salutation.pipe';
import { BonusPipe } from './pipes/bonus.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    SalutationPipe,
    BonusPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
