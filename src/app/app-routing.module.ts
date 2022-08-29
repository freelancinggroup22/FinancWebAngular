import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Auth
import { LoginComponent } from './Auth';

// Pages
import {
  DashboardComponent,
  HelpComponent,
  InvestmentComponent,
  SettingsComponent,
  WalletsComponent,
} from './pages';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'help', component: HelpComponent },
  { path: 'investment', component: InvestmentComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'wallets', component: WalletsComponent },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
