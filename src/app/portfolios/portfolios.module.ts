import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfoliosRoutingModule } from './portfolios-routing.module';
import { HomePortfoliosComponent } from './home-portfolios/home-portfolios.component';

@NgModule({
  imports: [
    CommonModule,
    PortfoliosRoutingModule
  ],
  declarations: [HomePortfoliosComponent]
})
export class PortfoliosModule { }
