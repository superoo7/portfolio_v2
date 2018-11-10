import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePortfoliosComponent } from './home-portfolios/home-portfolios.component';

const routes: Routes = [
  {
    path: '',
    component: HomePortfoliosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfoliosRoutingModule {}
