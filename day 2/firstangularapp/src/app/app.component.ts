import { NodeWithI18n } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
// Properties - values are hardcoded as of now but they should come from REST api calls
appName = "Shopping APP";
developer = "Nikhil";
teamSize = 20;
isLive = false;


}
