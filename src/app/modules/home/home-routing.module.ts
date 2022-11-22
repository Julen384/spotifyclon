import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'', //TODO: http://localhost:4200/dashboard
  component: HomePagesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
