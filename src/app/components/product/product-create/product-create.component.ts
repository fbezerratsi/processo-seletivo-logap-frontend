import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/category.service';
import { Category } from '../../category/category.model';
import { Provider } from '../../provider/provider.model';
import { ProviderService } from '../../provider/provider.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[]
  providers: Provider[]
  product: Product = {
    name: '',
    price: null,
    category_id: '',
    provider_id: ''
  }

  constructor(private productService: ProductService,
      private router: Router, private categoryService: CategoryService, private providerService: ProviderService) { }

  ngOnInit(): void {
    this.categoryService.read().subscribe(categories => {
      this.categories = categories
    })
    this.providerService.read().subscribe(providers => {
      this.providers = providers
    })
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
