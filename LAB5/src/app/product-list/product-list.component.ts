import { Component, Input } from '@angular/core'; 
 
import { categoryName } from 'src/app/product-item/product-item.component'; 
 
import { Product, products } from '../products';
 

const DELETED_KEY = 'deleted';
 
@Component({ 
  selector: 'app-product-list', 
  templateUrl: './product-list.component.html', 
  styleUrls: ['./product-list.component.css'] 
}) 
 
export class ProductListComponent { 

 
  categoryName:string 
 
  products = [...products];

  deleted: number[] = [];  

  @Input() product: Product | undefined;
  
 
 
  constructor(){ 
    this.categoryName = categoryName 
    const deletedStr = localStorage.getItem(DELETED_KEY);
    if (deletedStr) {
      this.deleted = JSON.parse(deletedStr);
    }
  } 
   
  filteredProducts(){ 
    return this.products.filter(c => c.category === categoryName && !this.deleted.find(id => id === c.id)); 
  } 
 
  delete(id:number){ 
    this.deleted.push(id) 
    localStorage.setItem(DELETED_KEY, JSON.stringify(this.deleted));
  } 
 
  share() { 
    window.alert('The product has been shared!'); 
  } 
 
  onNotify() { 
    window.alert('You will be notified when the product goes on sale'); 
  } 
 
  pressLike(product: Product){ 
    product.likes++;
  } 
} 
 
