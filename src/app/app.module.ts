import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared';

// Pages
import {
  DashboardModule,
  HelpModule,
  InvestmentModule,
  SettingsModule,
  WalletsModule,
} from './pages';

import { AuthService, LoginComponent } from './Auth';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,

    // Pages
    DashboardModule,
    HelpModule,
    InvestmentModule,
    SettingsModule,
    WalletsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
