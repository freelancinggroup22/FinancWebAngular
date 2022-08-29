import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Auth
import { LoginComponent, AuthGuard } from './Auth';

// Pages
import {
  DashboardComponent,
  HelpComponent,
  InvestmentComponent,
  SettingsComponent,
  WalletsComponent,
} from './pages';

const routes: Routes = [
  // Pages
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'help', component: HelpComponent, canActivate: [AuthGuard] },
  { path: 'investment', component: InvestmentComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'wallets', component: WalletsComponent, canActivate: [AuthGuard] },

  // Auth
  { path: 'login', component: LoginComponent },

  // Home
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
