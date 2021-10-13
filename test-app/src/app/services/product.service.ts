import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCTS = [
    {id : 101, name : "Apple", price : 199},
    {id : 102, name : "Banana", price : 99},
    {id : 103, name : "Kiwi", price : 299},
  ]
  constructor() { }

  getAllProducts(){
    return of(this.PRODUCTS)
  }
  getProductById(id :number){

  }
}
