import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrderManagerComponent } from './order-manager/order-manager.component';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from '../material-module/angular-material.module';

const childComponents = [
  LoginComponent,
  HeaderComponent,
  MenuItemsComponent,
  CategoriesComponent,
  OrderManagerComponent,
];

const importModules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  AngularMaterialModule,
];

@NgModule({
  declarations: childComponents,
  imports: importModules,
  exports: [...childComponents, AngularMaterialModule],
})
export class SharedModule {}
