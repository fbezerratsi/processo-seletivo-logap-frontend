import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-zero',
  templateUrl: './product-zero.component.html',
  styleUrls: ['./product-zero.component.css']
})
export class ProductZeroComponent implements OnInit {
  products: Product[]
  displayedColumns = ['name', 'price', 'category', 'provider', 'amount']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.readProductZero().subscribe(products => {
      this.products = products
      console.log("Product: ", this.products)
    })
  }

}
