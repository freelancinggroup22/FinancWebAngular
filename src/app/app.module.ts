import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared';

// Pages
import {
  DashboardComponent,
  WalletsComponent,
  InvestComponent,
  SettingsComponent,
  HelpComponent,
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WalletsComponent,
    InvestComponent,
    SettingsComponent,
    HelpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
