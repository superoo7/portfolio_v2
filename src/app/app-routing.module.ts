import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tools',
    loadChildren: './tools/tools.module#ToolsModule'
  },
  {
    path: 'portfolios',
    loadChildren: './portfolios/portfolios.module#PortfoliosModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
