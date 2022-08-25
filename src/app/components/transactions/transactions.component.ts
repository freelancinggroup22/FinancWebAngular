import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass'],
})
export class TransactionsComponent implements OnInit {
  constructor() {}

  @Input() cols: any[] = [];
  @Input() transactions: any[] = [];

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Transação' },
      { field: 'value', header: 'Valor' },
      { field: 'date', header: 'Data' },
      // { field: 'description', header: 'Description' },
      { field: 'installments', header: 'P' },
      { field: 'status', header: 'Status' },
    ];
  }
}
