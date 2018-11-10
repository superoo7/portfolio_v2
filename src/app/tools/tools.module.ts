import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { HomeToolsComponent } from './home-tools/home-tools.component';
import { QueryStringComponent } from './query-string/query-string.component';

@NgModule({
  imports: [
    CommonModule,
    ToolsRoutingModule
  ],
  declarations: [HomeToolsComponent, QueryStringComponent]
})
export class ToolsModule { }
