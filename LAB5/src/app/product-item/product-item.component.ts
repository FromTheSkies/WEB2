import { Component } from '@angular/core';
import { categories } from '../categories';
export var categoryName = "";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  categories = [...categories]

  changeVal(name:string) {
    // console.log(name)
    categoryName = name
  }
  
}