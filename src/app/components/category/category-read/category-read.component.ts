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
  displayedColumns = ['name', 'nameProducts', 'amount', 'action']

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.readCategoryStock().subscribe(categories => {
      this.categories = categories
      console.log("Categoria: ", this.categories)
    })
  }

}
