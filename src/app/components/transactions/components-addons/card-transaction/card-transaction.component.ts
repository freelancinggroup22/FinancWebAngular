import { Component, Input, OnInit } from '@angular/core';

import { SharedService, TransactionTypes, Functionalities } from 'src/app/shared';

@Component({
  selector: 'app-card-transaction',
  templateUrl: './card-transaction.component.html',
  styleUrls: ['./card-transaction.component.scss'],
})
export class CardTransactionComponent implements OnInit {
  constructor(private sharedService: SharedService, public functionalities: Functionalities) {}

  objeto!: TransactionTypes[];

  @Input() idWallet!: number;

  ngOnInit(): void {
    this.sharedService.idWallets.subscribe((id) => {
      this.idWallet = id;
      this.callCards(id);
    });
  }

  callCards(id: number) {
    this.sharedService.getOneWallet(id).then((wallets) => {
      wallets.forEach((wallet) => {
        if (wallet.transactions) {
          this.objeto = wallet.transactions;
        }
      });
    });
  }

  // callCards(id: number) {
  //   this.objeto = this.sharedService.getOneWallet(id);
  // }
}
