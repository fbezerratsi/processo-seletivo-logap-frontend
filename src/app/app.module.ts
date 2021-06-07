import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
//import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RedDirective } from './directives/red.directive';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { ForDirective } from './directives/for.directive';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { CategoryReadComponent } from './components/category/category-read/category-read.component';
import { CategoryCrudComponent } from './views/category-crud/category-crud/category-crud.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryUpdateComponent } from './components/category/category-update/category-update.component';
import { ProviderCrudComponent } from './views/provider-crud/provider-crud.component';
import { ProviderReadComponent } from './components/provider/provider-read/provider-read.component';
import { ProviderCreateComponent } from './components/provider/provider-create/provider-create.component';
import { ProviderUpdateComponent } from './components/provider/provider-update/provider-update.component';
import { StockCrudComponent } from './views/stock-crud/stock-crud.component';
import { StockReadComponent } from './components/stock/stock-read/stock-read.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockUpdateComponent } from './components/stock/stock-update/stock-update.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    //ProductRead2Component,
    RedDirective,
    ForDirective,
    ProductUpdateComponent,
    ProductDeleteComponent,
    CategoryReadComponent,
    CategoryCrudComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    ProviderCrudComponent,
    ProviderReadComponent,
    ProviderCreateComponent,
    ProviderUpdateComponent,
    StockCrudComponent,
    StockReadComponent,
    StockCreateComponent,
    StockUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
