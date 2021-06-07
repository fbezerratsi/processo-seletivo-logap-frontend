import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';
import { Stock } from '../stock.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  products: Product[]
  stock: Stock = {
    amount: 0,
    product_id: ''
  }

  constructor(private stockService: StockService, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  createStock(): void {
    this.stockService.create(this.stock).subscribe(() => {
      this.stockService.showMessage('Estoque criado!')
      this.router.navigate(['/stocks'])
    })
  }

  cancel(): void {
    this.router.navigate(['/stocks'])
  }

}
