import React, { useMemo, Dispatch, createContext } from "react";

export interface IFirebaseData {
  id: string;
  amount: number;
  category: string;
  date: string;
  transactionType: string;
  description: string;
}

export type FirebaseDataContextType = {
  firebaseData: IFirebaseData[];
  setFirebaseData: Dispatch<IFirebaseData[]>;
  transactionsArray: IFirebaseData[];
  setTransactionsArray: Dispatch<IFirebaseData[]>;
};

export const FirebaseDataContext = createContext<FirebaseDataContextType>({
  firebaseData: [],
  setFirebaseData: () => {},
  transactionsArray: [],
  setTransactionsArray: () => {},
});

type FirebaseDataProps = {
  children: React.ReactNode;
};

export const FirebaseDataProvider: React.FC<FirebaseDataProps> = ({
  children,
}) => {
  const [firebaseData, setFirebaseData] = React.useState<IFirebaseData[]>([]);
  const [transactionsArray, setTransactionsArray] = React.useState<
    IFirebaseData[]
  >([]);

  const contextValue = useMemo(() => {
    return {
      firebaseData,
      setFirebaseData,
      transactionsArray,
      setTransactionsArray,
    };
  }, [firebaseData, setFirebaseData, transactionsArray, setTransactionsArray]);

  return (
    <FirebaseDataContext.Provider value={contextValue}>
      {children}
    </FirebaseDataContext.Provider>
  );
};
