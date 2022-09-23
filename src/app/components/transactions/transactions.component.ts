import { Component, OnInit, Input } from '@angular/core';

import { TransactionTypes } from 'src/app/shared';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  constructor() {}

  @Input() transactions!: TransactionTypes[];

  ngOnInit(): void {}
}
