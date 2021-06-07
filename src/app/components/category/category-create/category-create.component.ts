import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = {
    name: '',
  }

  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createCategory(): void {
    this.categoryService.create(this.category).subscribe(() => {
      this.categoryService.showMessage('Categoria criada!')
      this.router.navigate(['/categories'])
    })
  }

  cancel(): void {
    this.router.navigate(['/categories'])
  }

}
