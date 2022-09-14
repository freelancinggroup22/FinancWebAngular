import { Component, OnInit } from '@angular/core';

import { WalletsTypes, SharedService } from 'src/app/shared';

import { Functionalities } from 'src/app/shared';

interface BarsTypes {
  barIncome: number;
  barOutcome: number;
}

@Component({
  selector: 'app-carousel-wallets',
  templateUrl: './carousel-wallets.component.html',
  styleUrls: ['./carousel-wallets.component.scss'],
})
export class CarouselWalletsComponent implements OnInit {
  wallets!: WalletsTypes[];
  bars: BarsTypes[] = [];

  incomeFormatted!: string;
  outcomeFormatted!: string;

  constructor(private sharedService: SharedService, public functionalities: Functionalities) {}

  // TODO: trocar o map para forEatch

  ngOnInit(): void {
    this.sharedService
      .getAllWallets()
      .then((wallets) => {
        this.wallets = wallets;
      })
      .then(() =>
        this.wallets.map((wallet) => {
          const { income, outcome } = wallet;
          const { _income, _outcome } = this.functionalities.calculatePercentage(
            Number(income),
            Number(outcome),
          );

          this.bars.push({ barIncome: _income, barOutcome: _outcome });

          if (Number(wallet.id) === 0) this.emmitIdWallet(0);
        }),
      );
  }

  emmitIdWallet(id: number) {
    this.sharedService.getIdWallet(id);
  }
}
