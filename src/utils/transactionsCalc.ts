import { ITransaction } from "../context/transactionContext";

export function handleTotalIncomes(transactions: ITransaction[]) {
  const totalAmount = transactions
    .filter((transaction) => transaction.transactionType === "Income")
    .reduce((total, transaction) => total + transaction.amount, 0);
  return totalAmount;
}

export function handleTotalExpenses(transactions: ITransaction[]) {
  const totalExpenses = transactions
    .filter((transaction) => transaction.transactionType === "Expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  return totalExpenses;
}

export function handleTotalBalance(totalIncome: number, totalExpenses: number) {
  const totalBalance = totalIncome - totalExpenses;
  return totalBalance;
}

export const handleTotalSavings = (transactions: ITransaction[]) => {
  const totalSavings = transactions
    .filter((transaction) => transaction.transactionType === "Savings")
    .reduce((total, transaction) => total + transaction.amount, 0);

  return totalSavings;
};

export const handleTotalInvestments = (transactions: ITransaction[]) => {
  const totalInvestments = transactions
    .filter((transaction) => transaction.transactionType === "Investment")
    .reduce((total, transaction) => total + transaction.amount, 0);

  return totalInvestments;
};
