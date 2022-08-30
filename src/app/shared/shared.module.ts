import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Ng Components
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';

// Components
import {
  ButtonComponent,
  CalendarComponent,
  CarouselWalletsComponent,
  CreateTransactionComponent,
  MenuComponent,
  TransactionsComponent,
} from 'src/app/components';

@NgModule({
  declarations: [
    // Components
    MenuComponent,
    CalendarComponent,
    CreateTransactionComponent,
    TransactionsComponent,
    ButtonComponent,
    CarouselWalletsComponent,
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
    CarouselModule,
    CardModule,
    TableModule,
    AutoCompleteModule,
    InputMaskModule,
    DropdownModule,
    MenubarModule,
    ProgressBarModule,
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
    CardModule,
    TableModule,
    AutoCompleteModule,
    InputMaskModule,
    DropdownModule,
    MenubarModule,
    ProgressBarModule,

    // Components
    MenuComponent,
    CalendarComponent,
    CreateTransactionComponent,
    TransactionsComponent,
    ButtonComponent,
    CarouselWalletsComponent,
  ],
})
export class SharedModule {}
