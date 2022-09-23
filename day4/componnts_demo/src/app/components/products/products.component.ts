import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productDetails = {
    pId:101, pName:'Pepsi',pCategory:'Cold-Drinks',pPrice:50, pDiscount:10}
  


  constructor() { }

  ngOnInit(): void {
  }

}
