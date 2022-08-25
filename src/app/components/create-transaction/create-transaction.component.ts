import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

import { TransactionTypes } from '../../shared';

type statusSelectedTypes = {
  status: 'Pago' | 'Pendente' | 'Planejado';
};

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.sass'],
})
export class CreateTransactionComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  text: string | undefined;
  results: string[] = [];
  statusSelected!: statusSelectedTypes;
  stateStatusts: TransactionTypes | undefined;

  newTransaction!: FormGroup;

  ngOnInit(): void {
    this.newTransaction = new FormGroup({
      name: new FormControl(''),
      date: new FormControl(''),
      value: new FormControl(0.0),
      status: new FormControl(),
      category: new FormControl(),
      description: new FormControl(),
      installments: new FormControl(),
    });
    this.stateStatusts = { status: 'Pago' };
    this.primengConfig.ripple = true;
  }

  search(event: any) {}
}
