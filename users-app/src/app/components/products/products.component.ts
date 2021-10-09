import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { map, mergeAll, take } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService : ProductService, private router : Router) { }

  products : Array<any> = []



  ngOnInit(): void {
    this.productService.getAllProducts().pipe(
      map((products: Array<any>) => from(products)),
      mergeAll()
    ).pipe(take(10))
      .subscribe((products : Array<any>) => {
        console.log("[PRODUCTS]", products);
        this.products.push(products);
      })
  }

  onProductSelected(product:  any){
    this.router.navigate([`products/overview/${product.id}`])
  }

}
