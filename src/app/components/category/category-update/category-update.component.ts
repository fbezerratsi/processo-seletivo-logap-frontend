import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  category: Category;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    const category_id = this.route.snapshot.paramMap.get("category_id");
    this.categoryService.readById(category_id).subscribe((category) => {
      this.category = category;
    });
  }

  updateCategory(): void {
    this.categoryService.update(this.category).subscribe(() => {
      this.categoryService.showMessage("Categoria atualizada com sucesso!");
      this.router.navigate(["/categories"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/categories"]);
  }

}
