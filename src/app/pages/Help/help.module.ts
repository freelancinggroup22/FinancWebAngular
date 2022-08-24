import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared';

import { HelpComponent } from './components/help.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HelpComponent],
})
export class HelpModule {}
