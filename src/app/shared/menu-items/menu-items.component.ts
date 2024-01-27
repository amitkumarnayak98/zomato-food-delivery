import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZomatoCoreService } from 'src/app/services/zomato-core.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
export class MenuItemsComponent implements OnInit {
  foodListMenu: any[] = [];
  likeIcon: boolean = false;
  constructor(
    private activate: ActivatedRoute,
    private apiService: ZomatoCoreService
  ) {
    this.activate.params.subscribe((res: any) => {
      this.loadFoodItemsByCategory(res.categoryId);
    });
  }

  loadFoodItemsByCategory(id: string) {
    this.apiService.getItemsByCategoryName(id).subscribe((foodDetails: any) => {
      const data = foodDetails.data;
      this.foodListMenu = data
        .filter(
          (eachFoodItem: any, index: number) =>
            index ===
            data.findIndex(
              (item: any) => item.restaurantName === eachFoodItem.restaurantName
            )
        )
        .map((eachFoodItem: any) => {
          return {
            ...eachFoodItem,
            isClicked: false,
            isLoader: false,
          };
        });
    });
  }

  isClickedLikeIcon(catalog: any) {
    this.foodListMenu = this.foodListMenu.map((eachFoodItem: any) => {
      if (
        eachFoodItem.restaurantID === catalog.restaurantID &&
        !eachFoodItem.isClicked
      ) {
        return {
          ...eachFoodItem,
          isClicked: true,
        };
      } else {
        return {
          ...eachFoodItem,
          isClicked: false,
        };
      }
    });
  }

  navigate(catalog: any) {
    this.foodListMenu = this.foodListMenu.map((eachFoodItem: any) => {
      if (
        eachFoodItem.restaurantID === catalog.restaurantID &&
        !eachFoodItem.isLoader
      ) {
        return {
          ...eachFoodItem,
          isLoader: true,
        };
      } else {
        return {
          ...eachFoodItem,
          isLoader: false,
        };
      }
    });

    setTimeout(() => {
      this.foodListMenu = this.foodListMenu.map((eachFoodItem: any) => {
        return {
          ...eachFoodItem,
          isLoader: false,
        };
      });
    }, 3000);
  }

  ngOnInit(): void {}
}
