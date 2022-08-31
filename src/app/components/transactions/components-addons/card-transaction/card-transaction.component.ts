import { Component, OnInit } from '@angular/core';

import { SharedService, TransactionTypes } from 'src/app/shared';
import { Functionalities } from 'src/app/functions';

@Component({
  selector: 'app-card-transaction',
  templateUrl: './card-transaction.component.html',
  styleUrls: ['./card-transaction.component.scss'],
})
export class CardTransactionComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  objeto!: any[];

  functionalities = new Functionalities();

  ngOnInit(): void {
    // this.sharedService.getWallets().then((wallets) => {
    //   return wallets.map((wallet) => {
    //     if (wallet.transactions) {
    //       console.log('Debugger in CardTransactionComponent:', this.objeto);
    //       return this.objeto?.push(...wallet.transactions);
    //     }
    //     return this.objeto;
    //   });
    // });

    this.sharedService.getOneWallet(1).then((wallets) => {
      return wallets.map((wallet) => {
        if (wallet.transactions) {
          return (this.objeto = wallet.transactions);
        }
        return;
      });
    });
  }
}
