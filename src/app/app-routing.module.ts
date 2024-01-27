import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';

/** Available routes for components at parent level */
const routePath: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];

const routes = routePath;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
