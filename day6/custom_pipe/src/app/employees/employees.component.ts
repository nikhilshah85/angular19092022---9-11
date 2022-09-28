import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {


  empName = "Mansi";
  empSalary = 15000;

  empSalaryDetils = [
    {  empSalary:5000, empDesignation:'Sales'  },
    {empSalary:10000, empDesignation:'Accounts'  },
    {empSalary:25000, empDesignation:'SASales'  },
    {empSalary:35000, empDesignation:'Sales'  },
    {empSalary:45000, empDesignation:'Accounts'  },
    {empSalary:65000, empDesignation:'Sales'  }
  ]

  empList = ['Nikhil','Rohan','Mohan','Priya','Riya','Jiya']
  constructor() { }

  ngOnInit(): void {
  }

}
