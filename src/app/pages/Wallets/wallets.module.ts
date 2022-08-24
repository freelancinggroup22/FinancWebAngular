import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared';

import { WalletsComponent } from './components/wallets.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [WalletsComponent],
})
export class WalletsModule {}
