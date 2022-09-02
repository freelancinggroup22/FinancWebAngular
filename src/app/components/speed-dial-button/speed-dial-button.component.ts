import { Component, OnInit } from '@angular/core';

import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-speed-dial-button',
  templateUrl: './speed-dial-button.component.html',
  styleUrls: ['./speed-dial-button.component.scss'],
})
export class SpeedDialButtonComponent implements OnInit {
  tooltipItems!: MenuItem[];

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
        command: () => {},
      },
    ];
  }
}
