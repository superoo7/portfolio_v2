import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeToolsComponent } from './home-tools/home-tools.component';
import { QueryStringComponent } from './query-string/query-string.component';

const routes: Routes = [
  {
    path: '',
    component: HomeToolsComponent
  },
  {
    path: 'querystring',
    component: QueryStringComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule {}
