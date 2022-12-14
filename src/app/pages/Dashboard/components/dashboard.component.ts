import { Component, OnInit } from '@angular/core';

import { SharedService, TransactionTypes, Functionalities } from 'src/app/shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private sharedService: SharedService, public funcionalities: Functionalities) {}

  transactionsDashboard!: TransactionTypes[];

  displayInfos!: boolean;
  displayWallet!: boolean;
  displayTransaction!: boolean;

  ngOnInit(): void {
    const { displayInfos, displayTransaction } = this.funcionalities;

    this.displayInfos = displayInfos;
    this.displayTransaction = displayTransaction;
  }

  closeTransaction() {
    this.displayInfos = true;
    this.displayTransaction = false;
  }
  closeWallet() {
    this.displayInfos = true;
    this.displayWallet = false;
  }

  onDisplayInfos(event: boolean) {
    this.displayInfos = event;
  }
  onDisplayTransaction(event: boolean) {
    this.displayTransaction = event;
  }
  onDisplayWallet(event: boolean) {
    this.displayWallet = event;
  }
}
