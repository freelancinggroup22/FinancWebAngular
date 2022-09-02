import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-speed-dial-button',
  templateUrl: './speed-dial-button.component.html',
  styleUrls: ['./speed-dial-button.component.scss'],
})
export class SpeedDialButtonComponent implements OnInit {
  tooltipItems!: MenuItem[];

  display = false;
  displayInfos = true;
  displayTransaction = false;
  columDashboardMain = 'p-col-8';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.tooltipItems = [
      {
        tooltip: 'Nova Carteira',
        icon: 'pi pi-wallet',
        tooltipPosition: 'left',
        command: () => {},
      },
      {
        tooltip: 'Nova Transação',
        icon: 'pi pi-money-bill',
        tooltipPosition: 'left',
        command: () => {
          this.showTransaction();
        },
      },
    ];
  }

  showTransaction() {
    this.displayInfos = !this.displayInfos;
    this.displayTransaction = !this.displayTransaction;
  }
}
