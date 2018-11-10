import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfoliosRoutingModule } from './portfolios-routing.module';
import { HomePortfoliosComponent } from './home-portfolios/home-portfolios.component';
import { StatBotComponent } from './stat-bot/stat-bot.component';
import { MatChipsModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PortfoliosRoutingModule,
    MatChipsModule,
    MatTooltipModule
  ],
  declarations: [HomePortfoliosComponent, StatBotComponent]
})
export class PortfoliosModule {}
