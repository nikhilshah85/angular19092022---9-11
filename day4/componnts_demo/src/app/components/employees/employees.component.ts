import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {


  empNo=101;
  empName="Nikhil";
  empDesignation = "Consultant";
  constructor() { }

  ngOnInit(): void {
  }

}
