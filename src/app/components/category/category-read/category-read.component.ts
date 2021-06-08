import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {
  categories: Category[]
  
  categoriesStock: Category[]
  displayedColumns = ['name', 'action']
  displayedColumnsCategoryStock = ['name', 'nameProducts', 'amount', 'action']

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.read().subscribe(categories => {
      this.categories = categories
    })
    this.categoryService.readCategoryStock().subscribe(categories => {
      this.categoriesStock = categories
      console.log("Categoria: ", this.categories)
    })
  }

}
