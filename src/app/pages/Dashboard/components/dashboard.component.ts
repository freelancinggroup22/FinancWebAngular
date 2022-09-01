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

  display = false;

  @Input() newTransaction: any;

  ngOnInit(): void {}

  showDialog() {
    this.display = true;
  }

  transactionButton() {
    return !this.newTransaction;
  }

  handleButtonEmit(event: any) {}
}
