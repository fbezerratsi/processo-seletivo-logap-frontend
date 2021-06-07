import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';
import { Stock } from '../stock.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.css']
})
export class StockUpdateComponent implements OnInit {

  products: Product[]
  stock: Stock;

  constructor(
    private stockService: StockService,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {  }

  ngOnInit(): void {
    const stock_id = this.route.snapshot.paramMap.get("stock_id");
    this.stockService.readById(stock_id).subscribe((stock) => {
      this.stock = stock;
      console.log("Estoque: ", this.stock);
    });

    this.productService.read().subscribe(products => {
      this.products = products
    })
  }


  updateStock(): void {
    this.stockService.update(this.stock).subscribe(() => {
      this.productService.showMessage("Estoque atualizado com sucesso!");
      this.router.navigate(["/stocks"]);
    });
    
  }

  cancel(): void {
    this.router.navigate(["/stocks"]);
  }

}
