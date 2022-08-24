import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared';

import { InvestmentComponent } from './components/investment.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [InvestmentComponent],
})
export class InvestmentModule {}
