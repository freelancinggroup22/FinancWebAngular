import { TransactionTypes } from './transactions.interface';

export interface WalletsResponseServiceTypes {
  value: [
    {
      _id: string;
      props: {
        user?: string;
        title: string;
        balance?: number;
        incomes?: number;
        outcomes?: number;
      };
    },
  ];
}
export interface WalletsTypes {
  id?: string;
  user?: string;
  name: string;
  balance?: number;
  income?: number;
  outcome?: number;
  transactions?: TransactionTypes[];
}
