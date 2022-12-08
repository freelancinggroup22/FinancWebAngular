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
  bars: BarsTypes[];

  incomeFormatted!: string;
  outcomeFormatted!: string;

  constructor(private sharedService: SharedService, public functionalities: Functionalities) {}

  ngOnInit(): void {
    this.sharedService.getAllWallets().subscribe((wallets) => {
      // console.log('Debugger in CreateTransactionComponent:', wallets);0

      this.wallets = wallets.value.map((wallet) => {
        return {
          id: wallet._id,
          user: wallet.props.user,
          name: wallet.props.title,
          balance: wallet.props.balance,
          income: wallet.props.incomes,
          outcome: wallet.props.outcomes,
        };
      });

      this.wallets = this.wallets.map((wallet) => {
        const { income, outcome } = wallet;
        const { _income, _outcome } = this.functionalities.calculatePercentage(
          Number(income),
          Number(outcome),
        );

        if (Number(wallet.id) === 0) this.emmitIdWallet(0);

        return { ...wallet, bartIncome: _income, barOutcome: _outcome };
      });
    });
  }

  emmitIdWallet(id: number) {
    this.sharedService.getIdWallet(id);
  }
}
