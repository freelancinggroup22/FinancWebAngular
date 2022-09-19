import { TransactionTypes } from './transactions.interface';
export interface WalletsTypes {
  id?: string;
  user: string;
  name: string;
  balance: number;
  income?: number;
  outcome?: number;
  transactions?: TransactionTypes[];
}
