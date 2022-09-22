import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Functionalities } from 'src/app/shared';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-speed-dial-button',
  templateUrl: './speed-dial-button.component.html',
  styleUrls: ['./speed-dial-button.component.scss'],
})
export class SpeedDialButtonComponent implements OnInit {
  tooltipItems!: MenuItem[];

  @Output() displayInfos = new EventEmitter();
  @Output() displayWallet = new EventEmitter();
  @Output() displayTransaction = new EventEmitter();
  columDashboardMain = 'p-col-8';

  constructor(public functionalities: Functionalities) {}

  ngOnInit(): void {
    this.tooltipItems = [
      {
        tooltip: 'Nova Carteira',
        icon: 'pi pi-wallet',
        tooltipPosition: 'left',
        command: () => {
          this.functionalities.showWallet();
          this.displayController();
        },
      },
      {
        tooltip: 'Nova Transação',
        icon: 'pi pi-money-bill',
        tooltipPosition: 'left',
        command: () => {
          this.functionalities.showTransaction();
          this.displayController();
        },
      },
    ];
  }

  displayController() {
    const { displayInfos, displayWallet, displayTransaction } = this.functionalities;

    this.displayInfos.emit(displayInfos);
    this.displayWallet.emit(displayWallet);
    this.displayTransaction.emit(displayTransaction);
  }
}
