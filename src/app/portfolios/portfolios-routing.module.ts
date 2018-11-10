import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePortfoliosComponent } from './home-portfolios/home-portfolios.component';
import { StatBotComponent } from './stat-bot/stat-bot.component';

const routes: Routes = [
  {
    path: '',
    component: HomePortfoliosComponent
  },
  {
    path: 'statbot',
    component: StatBotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfoliosRoutingModule {}
