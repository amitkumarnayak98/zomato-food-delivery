import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZomatoCoreService } from 'src/app/services/zomato-core.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  catalogList: any;
  constructor(private apiService: ZomatoCoreService, private router: Router) {}

  ngOnInit(): void {
    this.getAllFoodCatalog();
  }

  getAllFoodCatalog() {
    this.apiService.getAllFoodCategory().subscribe({
      next: (foodCategory: any) => {
        this.catalogList = foodCategory.data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  navigate(item: any) {
    this.router.navigate(['/resturant-items', item.categoryId]);
  }
}
