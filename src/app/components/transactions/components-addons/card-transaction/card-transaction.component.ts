import { Component, Input, OnInit } from '@angular/core';

import { SharedService, TransactionTypes } from 'src/app/shared';
import { Functionalities } from 'src/app/functions';

@Component({
  selector: 'app-card-transaction',
  templateUrl: './card-transaction.component.html',
  styleUrls: ['./card-transaction.component.scss'],
})
export class CardTransactionComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  objeto!: TransactionTypes[];

  @Input() idWallet!: number;

  functionalities = new Functionalities();

  ngOnInit(): void {
    this.sharedService.idWallets.subscribe((id) => {
      this.idWallet = id;
      this.callCards(id);
    });
  }

  callCards(id: number) {
    this.sharedService.getOneWallet(id).then((wallets) => {
      return wallets.map((wallet) => {
        if (wallet.transactions) {
          return (this.objeto = wallet.transactions);
        }
        return;
      });
    });
  }
}
