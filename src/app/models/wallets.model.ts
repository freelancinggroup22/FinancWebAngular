import { TransactionsModels } from './transactions.model';

export interface WalletsModel {
  id?: string;
  name?: string;
  balance?: number;
  transactions?: TransactionsModels[];
}
