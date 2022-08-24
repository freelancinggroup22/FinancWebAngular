import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared';

import { DashboardComponent } from './components/dashboard.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
