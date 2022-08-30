import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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

import { SharedService } from 'src/app/shared';
import { AuthGuard, AuthService, LoginComponent } from './Auth';
import { RegisterComponent } from './Auth/components/register/register.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    SharedModule,

    // Pages
    DashboardModule,
    HelpModule,
    InvestmentModule,
    SettingsModule,
    WalletsModule,
  ],
  providers: [AuthService, AuthGuard, SharedService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
