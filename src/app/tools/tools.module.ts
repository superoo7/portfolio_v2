import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToolsRoutingModule } from './tools-routing.module';
import { HomeToolsComponent } from './home-tools/home-tools.component';
import { QueryStringComponent } from './query-string/query-string.component';

@NgModule({
  imports: [CommonModule, ToolsRoutingModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomeToolsComponent, QueryStringComponent]
})
export class ToolsModule {}
