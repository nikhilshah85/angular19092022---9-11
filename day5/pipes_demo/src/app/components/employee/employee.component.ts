import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


empList = [
  {empNo:101, empName:'Karan',empDesignation:'Sales',empSalary:6000},
  {empNo:102, empName:'Rohan',empDesignation:'Accounts',empSalary:8000},
  {empNo:103, empName:'Mohan',empDesignation:'Sales',empSalary:12000},
  {empNo:104, empName:'Sohan',empDesignation:'Sales',empSalary:5000},
  {empNo:105, empName:'Manish',empDesignation:'Accounts',empSalary:26000},
  {empNo:106, empName:'Mohit',empDesignation:'Sales',empSalary:56000},
  {empNo:107, empName:'Mitesh',empDesignation:'Sales',empSalary:1500},
  {empNo:108, empName:'Ritesh',empDesignation:'Accounts',empSalary:1850},
]

  constructor() { }

  ngOnInit(): void {
  }

}
