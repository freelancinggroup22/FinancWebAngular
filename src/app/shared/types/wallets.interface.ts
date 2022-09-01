import { TransactionTypes } from './transactions.interface';
export interface WalletsTypes {
  id?: string;
  name: string;
  income?: number;
  outcome?: number;
  type?: string;
  transactions?: TransactionTypes[];
}
