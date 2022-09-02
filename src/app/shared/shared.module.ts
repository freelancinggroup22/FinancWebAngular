import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessageService } from 'primeng/api';

// Ng Components
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipsModule } from 'primeng/chips';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextareaModule } from 'primeng/inputtextarea';

// Components
import {
  ButtonComponent,
  CalendarComponent,
  CardTransactionComponent,
  CarouselWalletsComponent,
  CreateTransactionComponent,
  MenuComponent,
  SpeedDialButtonComponent,
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
    CardTransactionComponent,
    SpeedDialButtonComponent,
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
    SpeedDialModule,
    DialogModule,
    InputNumberModule,
    ChipsModule,
    InputTextareaModule,
  ],
  exports: [
    // Forms
    FormsModule,
    ReactiveFormsModule,

    // Components
    MenuComponent,
    CalendarComponent,
    CreateTransactionComponent,
    TransactionsComponent,
    ButtonComponent,
    CarouselWalletsComponent,
    CardTransactionComponent,
    SpeedDialButtonComponent,

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
    SpeedDialModule,
    DialogModule,
    InputNumberModule,
    ChipsModule,
    InputTextareaModule,
  ],
  providers: [MessageService],
})
export class SharedModule {}
