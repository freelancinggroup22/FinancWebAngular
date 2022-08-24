import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared';

import { SettingsComponent } from './components/settings.component';
@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
