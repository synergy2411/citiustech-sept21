import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  product : any;

  constructor(private route : ActivatedRoute, private productService : ProductService) { }


  ngOnInit(): void {

    console.log("Params : ", this.route.snapshot.params)
    let id : number = +this.route.snapshot.params['prodId']
    this.productService.getSingleProduct(id)
      .subscribe(result => {
        console.log(result)
        this.product = result;
      })

  }

}
