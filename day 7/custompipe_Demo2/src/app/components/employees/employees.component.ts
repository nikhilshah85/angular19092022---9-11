import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {


  empDetails = [
    {empNo:101, emName:'Karan', empDesigantion:'Sales', empSalary:80000,empIsPermenant:true, empGender:'Male'},
    {empNo:102, emName:'Mohit', empDesigantion:'Accounts', empSalary:80000,empIsPermenant:false, empGender:'Male'},
    {empNo:103, emName:'Priya', empDesigantion:'Sales', empSalary:80000,empIsPermenant:true, empGender:'Female'},
    {empNo:104, emName:'Suresh', empDesigantion:'Accounts', empSalary:80000,empIsPermenant:true, empGender:'Male'},
    {empNo:105, emName:'Riya', empDesigantion:'Sales', empSalary:80000,empIsPermenant:false, empGender:'Female'},
    {empNo:106, emName:'Ramesh', empDesigantion:'Sales', empSalary:80000,empIsPermenant:true, empGender:'Male'},
    {empNo:107, emName:'Akshay', empDesigantion:'Sales', empSalary:80000,empIsPermenant:true, empGender:'Male'},
    {empNo:108, emName:'Jiya', empDesigantion:'Accounts', empSalary:80000,empIsPermenant:false, empGender:'Female'},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
