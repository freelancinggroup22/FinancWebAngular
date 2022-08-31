import { Component, OnInit } from '@angular/core';

import { WalletsTypes, SharedService } from 'src/app/shared';

import { Functionalities } from 'src/app/functions';

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
  functionalities = new Functionalities();

  wallets!: WalletsTypes[];
  bars: BarsTypes[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService
      .getWallets()
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
