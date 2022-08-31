const date = new Date();
const dataFormatada = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

export const data = {
  transactions: {
    janeiro: [
      {
        name: 'Salario',
        date: '5/8/2022',
        value: 3800.0,
        status: 'Pendente',
        category: 'salario',
        flow: 'income',
        description: 'combo',
        installments: [1],
        iconCategory: 'pi-wallet',
      },
      {
        name: 'Adega',
        date: '5/8/2022',
        value: 31.0,
        status: 'Pendente',
        category: 'compras',
        flow: 'outcome',
        description: 'combo',
        installments: [1],
        iconCategory: 'pi-shopping-cart',
      },
      {
        name: 'Mercado livre',
        date: '6/8/2022',
        value: 35.0,
        status: 'Pago',
        category: 'vendas',
        flow: 'income',
        description: 'palmilha',
        installments: [1],
        iconCategory: 'pi-money-bill',
      },
      {
        name: 'Memoria Ram',
        date: dataFormatada,
        value: 465.0,
        status: 'Planejado',
        category: 'compras',
        flow: 'outcome',
        description: 'memoria ram pc',
        installments: [2],
        iconCategory: 'pi-shopping-cart',
      },
    ],
  },
};
