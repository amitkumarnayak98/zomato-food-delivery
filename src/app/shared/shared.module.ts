import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../material-module/angular-material.module';
import { LoginComponent } from './login/login.component';

const childComponents = [LoginComponent];

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
