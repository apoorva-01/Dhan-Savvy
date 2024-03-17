import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  handleTotalBalance,
  handleTotalExpenses,
  handleTotalIncomes,
  handleTotalInvestments,
  handleTotalSavings,
} from "../utils/transactionsCalc";

export interface ITransaction {
  date: string;
  category: string;
  description: string;
  amount: number;
  transactionType: string;
  totalIncomes: number;
  totalExpenses: number;
  totalBalance: number;
  totalSavings?: number;
  totalInvestments?: number;
}

export type TransactionContextType = {
  date: string;
  setDate: (date: string) => void;
  category: string;
  setCategory: (category: string) => void;
  description: string;
  setDescription: (description: string) => void;
  amount: number;
  setAmount: (amount: number) => void;
  transactions: ITransaction[];
  setTransactions: Dispatch<SetStateAction<ITransaction[]>>;
  transactionType: string;
  setTransactionType: (transactionType: string) => void;
  totalIncomes: number;
  totalExpenses: number;
  totalBalance: number;
  totalSavings?: number;
  totalInvestments?: number;
};

const initialTransaction: ITransaction = {
  date: "",
  category: "",
  description: "",
  amount: 0,
  transactionType: "",
  totalIncomes: 0,
  totalExpenses: 0,
  totalBalance: 0,
  totalSavings: 0,
  totalInvestments: 0,
};

export const TransactionContext = createContext<TransactionContextType>({
  date: "",
  setDate: () => {},
  category: "",
  setCategory: () => {},
  description: "",
  setDescription: () => {},
  amount: 0,
  setAmount: () => {},
  transactions: [initialTransaction],
  setTransactions: () => {},
  transactionType: "",
  setTransactionType: () => {},
  totalIncomes: 0,
  totalExpenses: 0,
  totalBalance: 0,
  totalSavings: 0,
  totalInvestments: 0,
});

type TransactionProviderProps = {
  children: React.ReactNode;
};

export const TransactionProvider: React.FC<TransactionProviderProps> = ({
  children,
}) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [transactionType, setTransactionType] = useState("");

  useEffect(() => {
    const localStorageTransactions = localStorage.getItem("transactions");
    if (localStorageTransactions) {
      setTransactions(JSON.parse(localStorageTransactions));
    }
  }, []);

  const totalIncomes = handleTotalIncomes(transactions);
  const totalExpenses = handleTotalExpenses(transactions);
  const totalBalance = handleTotalBalance(totalIncomes, totalExpenses);
  const totalSavings = handleTotalSavings(transactions);
  const totalInvestments = handleTotalInvestments(transactions);

  const contextValue = useMemo(() => {
    return {
      date,
      setDate,
      category,
      setCategory,
      description,
      setDescription,
      amount,
      setAmount,
      transactions,
      setTransactions,
      transactionType,
      setTransactionType,
      totalIncomes,
      totalExpenses,
      totalBalance,
      totalSavings,
      totalInvestments,
    };
  }, [
    date,
    transactions,
    category,
    description,
    amount,
    transactionType,
    totalIncomes,
    totalExpenses,
    totalBalance,
    totalSavings,
    totalInvestments,
  ]);

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};
