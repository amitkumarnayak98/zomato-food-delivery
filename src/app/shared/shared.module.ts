import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../material-module/angular-material.module';

const childComponents = [];

const importModules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  AngularMaterialModule,
];

@NgModule({
  // declarations: childComponents,
  imports: importModules,
  exports: [AngularMaterialModule],
})
export class SharedModule {}
