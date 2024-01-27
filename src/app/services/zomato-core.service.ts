import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZomatoCoreService {
  constructor(private http: HttpClient) {}

  getAllFoodCategory() {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory'
    );
  }

  getItemsByCategoryName(id: string) {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/zomato/GetRestaurantServingByCategoryId?categoryId=' +
        // 'https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemByCategory?categoryId=')
        id
    );
  }
}
