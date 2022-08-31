import { Component, Input, OnInit } from '@angular/core';

import { SharedService, TransactionTypes } from 'src/app/shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  transactionsDashboard!: TransactionTypes[];

  @Input() newTransaction: any;

  ngOnInit(): void {}

  transactionButton() {
    return !this.newTransaction;
  }

  handleButtonEmit(event: any) {}
}
