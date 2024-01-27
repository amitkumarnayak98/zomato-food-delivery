import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Available routes for components at parent level */
const routePath: Routes = [];

const routes = routePath;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
