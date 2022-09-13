import { Component, OnInit } from '@angular/core';

import { Functionalities } from 'src/app/shared';

import { MenuItem } from 'primeng/api';

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

  constructor(public functionalities: Functionalities) {}

  ngOnInit(): void {
    const { display, displayInfos, displayTransaction, columDashboardMain } = this.functionalities;

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
          this.showTransaction(display, displayInfos, displayTransaction, columDashboardMain);
        },
      },
    ];
  }

  showTransaction(
    display: boolean,
    displayInfos: boolean,
    displayTransaction: boolean,
    columDashboardMain: string,
  ) {
    this.display = display;
    this.displayInfos = displayInfos;
    this.displayTransaction = displayTransaction;
    this.columDashboardMain = columDashboardMain;

    console.log(
      'Debugger in SpeedDialButtonComponent:',
      this.display,
      ' : ',
      this.displayInfos,
      ' : ',
      this.displayTransaction,
    );
  }
}
