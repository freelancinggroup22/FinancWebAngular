import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import {
  DashboardComponent,
  HelpComponent,
  InvestmentComponent,
  SettingsComponent,
  WalletsComponent,
} from './pages';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'help', component: HelpComponent },
  { path: 'investment', component: InvestmentComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'wallets', component: WalletsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
