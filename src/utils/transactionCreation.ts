interface ITransaction {
  date: string;
  category: string;
  description: string;
  amount: number;
  transactionType: string;
  totalExpenses: number;
  totalIncomes: number;
  totalBalance: number;
}

export function createTransaction(
  date: string,
  category: string,
  description: string,
  amount: number,
  transactionType: string
): ITransaction {
  const newTransaction: ITransaction = {
    date,
    category,
    description,
    amount,
    transactionType,
    totalExpenses: 0,
    totalIncomes: 0,
    totalBalance: 0,
  };

  const localStorageTransactions = localStorage.getItem("transactions");
  let updatedTransactions: ITransaction[] = [];

  if (localStorageTransactions) {
    updatedTransactions = JSON.parse(localStorageTransactions);
  }

  updatedTransactions.push(newTransaction);
  localStorage.setItem("transactions", JSON.stringify(updatedTransactions));

  return newTransaction;
}
