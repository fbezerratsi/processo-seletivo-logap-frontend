import { Product } from "./../product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../category/category.service";
import { Category } from "../../category/category.model";
import { Provider } from "../../provider/provider.model";
import { ProviderService } from "../../provider/provider.service";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  categories: Category[]
  providers: Provider[]
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private providerService: ProviderService
  ) {  }

  ngOnInit(): void {
    const product_id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(product_id).subscribe((product) => {
      this.product = product;
      console.log("Produto: ", this.product);
    });

    this.categoryService.read().subscribe(categories => {
      this.categories = categories
    })
    this.providerService.read().subscribe(providers => {
      this.providers = providers
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/products"]);
    });
    
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
