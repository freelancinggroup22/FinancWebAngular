import { Component, OnInit } from '@angular/core';

import { WalletsTypes, SharedService } from 'src/app/shared';

import { Functionalities } from 'src/app/functions';

interface BarsTypes {
  bar1: number;
  bar2: number;
}

@Component({
  selector: 'app-carousel-wallets',
  templateUrl: './carousel-wallets.component.html',
  styleUrls: ['./carousel-wallets.component.scss'],
})
export class CarouselWalletsComponent implements OnInit {
  wallets!: WalletsTypes[];

  functionalities = new Functionalities();

  bars: BarsTypes[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService
      .getWallets()
      .then((wallets) => {
        this.wallets = wallets;
      })
      .then(() =>
        this.wallets.map((element) => {
          const { income, outcome } = element;
          const { _income, _outcome } = this.functionalities.calculatePercentage(
            Number(income?.toFixed(0)),
            Number(outcome?.toFixed(0)),
          );

          this.bars.push({ bar1: _income, bar2: _outcome });
        }),
      );
  }
}
