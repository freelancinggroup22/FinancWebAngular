let date = new Date();
let dataFormatada =
  date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

export const data = {
  transactions: {
    janeiro: [
      {
        name: 'Adega',
        date: '5/8/2022',
        value: 31.0,
        status: 'Pendente',
        category: 'besteira',
        description: 'combo',
        installments: [1],
      },
      {
        name: 'Mercado livre',
        date: '6/8/2022',
        value: 35.0,
        status: 'Pago',
        category: 'quarto',
        description: 'palmilha',
        installments: [1],
      },
      {
        name: 'Memoria Ram',
        date: dataFormatada,
        value: 465.0,
        status: 'Planejado',
        category: 'notebook',
        description: 'memoria ram pc',
        installments: [2],
      },
    ],
  },
};
