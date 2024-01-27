import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './shared/categories/categories.component';
import { LoginComponent } from './shared/login/login.component';
import { MenuItemsComponent } from './shared/menu-items/menu-items.component';
import { OrderManagerComponent } from './shared/order-manager/order-manager.component';

/** Available routes for components at parent level */
const routePath: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'food-categories',
    component: CategoriesComponent,
  },
  {
    path: 'resturant-items/:categoryId',
    component: MenuItemsComponent,
  },
  {
    path: 'create-order',
    component: OrderManagerComponent,
  },
];

const routes = routePath;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
