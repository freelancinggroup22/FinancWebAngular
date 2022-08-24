import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ng Components
import { AccordionModule } from 'primeng/accordion';
import { MegaMenuModule } from 'primeng/megamenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';

// Pages
import {
  DashboardModule,
  HelpModule,
  InvestmentModule,
  SettingsModule,
  WalletsModule,
} from '../pages';

// Components
import {
  MenuComponent,
  CalendarComponent,
  CreateTransactionComponent,
  TransactionsComponent,
  ButtonComponent,
} from '../components';

@NgModule({
  declarations: [
    // Components
    MenuComponent,
    CalendarComponent,
    CreateTransactionComponent,
    TransactionsComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    // NG Modules
    AccordionModule,
    MegaMenuModule,
    TabMenuModule,
    PanelModule,
    CalendarModule,
    TableModule,
    AutoCompleteModule,
    InputMaskModule,
    DropdownModule,

    // Pages
    DashboardModule,
    HelpModule,
    InvestmentModule,
    SettingsModule,
    WalletsModule,
  ],
  exports: [
    // NG Modules
    AccordionModule,
    MegaMenuModule,
    TabMenuModule,
    PanelModule,
    CalendarModule,
    TableModule,
    AutoCompleteModule,
    InputMaskModule,
    DropdownModule,

    // Pages
    DashboardModule,
    HelpModule,
    InvestmentModule,
    SettingsModule,
    WalletsModule,

    // Components
    MenuComponent,
    CalendarComponent,
    CreateTransactionComponent,
    TransactionsComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
