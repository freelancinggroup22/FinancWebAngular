import { WalletsTypes } from './wallets.interface';
export interface TransactionTypes {
  category: string;
  date: string;
  description: string;
  iconCategory: string;
  installments: [];
  title: string;
  status: 'Pendente' | 'Planejado' | 'Pago';
  type: 'Income' | 'Outcome' | string;
  amaout: number;
  wallet: WalletsTypes;
}
