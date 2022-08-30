import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Ng Components
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MegaMenuModule } from 'primeng/megamenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';

// Components
import {
  MenuComponent,
  CalendarComponent,
  CreateTransactionComponent,
  TransactionsComponent,
  ButtonComponent,
} from 'src/app/components';

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

    // Forms
    FormsModule,
    ReactiveFormsModule,

    // NG Modules
    AccordionModule,
    AvatarModule,
    AvatarGroupModule,
    MegaMenuModule,
    TabMenuModule,
    PanelModule,
    CalendarModule,
    TableModule,
    AutoCompleteModule,
    InputMaskModule,
    DropdownModule,
    MenubarModule,
  ],
  exports: [
    // Forms
    FormsModule,
    ReactiveFormsModule,

    // NG Modules
    AccordionModule,
    AvatarModule,
    AvatarGroupModule,
    MegaMenuModule,
    TabMenuModule,
    PanelModule,
    CalendarModule,
    TableModule,
    AutoCompleteModule,
    InputMaskModule,
    DropdownModule,
    MenubarModule,

    // Components
    MenuComponent,
    CalendarComponent,
    CreateTransactionComponent,
    TransactionsComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
