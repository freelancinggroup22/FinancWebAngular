export interface TransactionTypes {
  category?: string;
  date?: string;
  description?: string;
  flow?: string;
  iconCategory?: string;
  installments?: [];
  name?: string;
  status?: 'Pendente' | 'Planejado' | 'Pago';
  value?: number;
}
