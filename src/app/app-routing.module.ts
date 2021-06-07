import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { CategoryCrudComponent } from './views/category-crud/category-crud/category-crud.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryUpdateComponent } from './components/category/category-update/category-update.component';
import { ProviderCrudComponent } from './views/provider-crud/provider-crud.component';
import { ProviderCreateComponent } from './components/provider/provider-create/provider-create.component';
import { ProviderUpdateComponent } from './components/provider/provider-update/provider-update.component';
import { StockCrudComponent } from './views/stock-crud/stock-crud.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockUpdateComponent } from './components/stock/stock-update/stock-update.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "categories",
    component: CategoryCrudComponent
  },
  {
    path: "categories/create",
    component: CategoryCreateComponent
  },
  {
    path: "categories/update/:category_id",
    component: CategoryUpdateComponent
  },
  {
    path: "categories/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "providers",
    component: ProviderCrudComponent
  },
  {
    path: "providers/create",
    component: ProviderCreateComponent
  },
  {
    path: "providers/update/:provider_id",
    component: ProviderUpdateComponent
  },
  {
    path: "stocks",
    component: StockCrudComponent
  },
  {
    path: "stocks/create",
    component: StockCreateComponent
  },
  {
    path: "stocks/update/:stock_id",
    component: StockUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
