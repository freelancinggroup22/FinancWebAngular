import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

import { SharedService, TransactionTypes, WalletsTypes } from 'src/app/shared';

interface StatusTypes {
  status: 'Pago' | 'Pendente' | 'Planejado';
}

interface CategoryTypes {
  category: string;
  icon: string;
}

interface TypeTypes {
  type: 'Debito' | 'Credito' | 'Dinherio' | 'Investimento';
}

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss'],
})
export class CreateTransactionComponent implements OnInit {
  typeArray!: TypeTypes[];
  typeSelected!: TypeTypes;

  statusArray!: StatusTypes[];
  statusSelected!: StatusTypes;

  walletsArray!: WalletsTypes[];
  walletSelected!: WalletsTypes;

  categoryArray!: CategoryTypes[];
  categorySelected!: CategoryTypes;

  newTransaction!: FormGroup;

  flowSelected!: string;

  constructor(
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
  ) {}

  ngOnInit(): void {
    this.newTransaction = this.formBuilder.group<TransactionTypes>({
      title: '',
      date: '',
      amaout: 0,
      status: 'Pendente',
      category: '',
      description: '',
      type: '',
      installments: [],
      iconCategory: '',
      wallet: {
        id: undefined,
        user: '',
        name: '',
        balance: 0,
        income: 0,
        outcome: 0,
      },
    });

    this.typeArray = [
      { type: 'Debito' },
      { type: 'Credito' },
      { type: 'Dinherio' },
      { type: 'Investimento' },
    ];
    this.statusArray = [{ status: 'Pago' }, { status: 'Planejado' }, { status: 'Pendente' }];
    this.categoryArray = [
      { category: 'Compras', icon: 'pi-shopping-cart' },
      { category: 'Alimentação', icon: 'pi-apple' },
      { category: 'Salario', icon: 'pi-money-bill' },
      { category: 'Transporte', icon: 'pi-send' },
      { category: 'Viagem', icon: 'pi-camera' },
    ];

    this.sharedService.getAllWallets().then((wallets) => {
      this.walletsArray = wallets.filter((wallet) => wallet.name !== 'Total');
    });

    this.primengConfig.ripple = true;
  }

  flow(flow: string) {
    this.newTransaction.patchValue({ flow });
  }

  //TODO: Destruição do componente

  getWalletId(walletId: any) {
    this.newTransaction.patchValue({ walletId });
    // this.newTransaction.patchValue({ wallet: { id: walletId } });
    console.log('Debugger in CreateTransactionComponent:', walletId);
  }

  handleCreateTransaction() {
    console.log('Debugger in CreateTransactionComponent:', this.newTransaction.value);
  }
}
