import { Component  } from "@angular/core";




@Component({
    selector:'product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})
export class Product
{

    pId = 101;
    pName = "Pepsi";
    pCategory="Cold-Drinks";
    pPrice = 50;
    pIsInStock = true;
    pQty = 20;
}