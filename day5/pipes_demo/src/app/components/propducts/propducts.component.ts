import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propducts',
  templateUrl: './propducts.component.html',
  styleUrls: ['./propducts.component.css']
})
export class PropductsComponent implements OnInit {



  productList = {
    pId:101,
    pName:'pepsi',
    pManufacturer : 'pepSICO',
    pCategory:'COLD-DRINK',
    pPrice:50,
    dateofMnufacture:new Date()

  }
  constructor() { }

  ngOnInit(): void {
  }

}
