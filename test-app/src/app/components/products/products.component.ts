import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Array<any> = []

  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(response => {
      this.products = response;
    })
  }

  navigateUser(product : any){
    this.router.navigate(['/product-detail', product.id])
  }
}
