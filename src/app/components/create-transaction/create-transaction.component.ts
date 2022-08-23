import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

import { TransactionTypes } from '../../shared';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.sass'],
})
export class CreateTransactionComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  text: string | undefined;
  results: string[] = [];
  statusSelected: any;
  stateStatusts: TransactionTypes | undefined;

  newTransaction = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    value: new FormControl(0.0),
    status: new FormControl(),
    category: new FormControl(),
    description: new FormControl(),
    installments: new FormControl(),
  });

  ngOnInit(): void {
    this.stateStatusts = { status: 'Pago' };
    this.primengConfig.ripple = true;
  }

  search(event: any) {
    console.log('Debugger in CreateTransactionComponent:', event);
  }
}
