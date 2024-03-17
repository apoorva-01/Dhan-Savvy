import { Box, Spinner, Tag, Text } from "@chakra-ui/react";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  Bank,
  PiggyBank,
} from "@phosphor-icons/react";
import { ListContainer, SpinnerContainer } from "./styles";
import { useContext, useEffect, useState } from "react";
import { handleAmountIntToFloat } from "../../../../utils/fixAmountValue";
import { convertMonthPattern } from "../../../../utils/convertMonthPattern";
import { getAllTransactions } from "../../../../data/firebase";
import { AuthContext } from "../../../../context/authenticationContext";
import { FirebaseDataContext } from "../../../../context/firebaseDataContext";

interface IconMap {
  [key: string]: React.ReactNode;
}

export interface TransactionData {
  id: string;
  newTransaction: {
    amount: number;
    category: string;
    date: string;
    description: string;
    transactionType: string;
  };
}

export const TransactionsList = () => {
  const { userId } = useContext(AuthContext)!;
  const { setFirebaseData } = useContext(FirebaseDataContext);

  const [getTransactionsFromDb, setGetTransactionsFromDb] =
    useState<TransactionData[]>();

  const iconBasedOnType: IconMap = {
    Income: <ArrowCircleUp size={30} color="green" />,
    Expense: <ArrowCircleDown size={30} color="red" />,
    Savings: <PiggyBank size={30} color="green" />,
    Investments: <Bank size={30} color="green" />,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTransactions(userId);
        if (data) {
          const transactions = Object.keys(data).map((id) => ({
            id,
            ...data[id],
          }));

          setGetTransactionsFromDb(transactions);
          setFirebaseData(transactions);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("An error has occurred:", error);
      }
    };

    fetchData();
  }, [userId, setFirebaseData]);

  if (getTransactionsFromDb?.length === 0) {
    return <div>Aguardando dados...</div>;
  }

  return (
    <>
      {getTransactionsFromDb ? (
        getTransactionsFromDb.map((transactionGroup: TransactionData) => {
          return Object.values(transactionGroup).map(
            (transaction: TransactionData, index: number) => {
              if (transaction.newTransaction) {
                return (
                  <ListContainer
                    key={`${transaction.newTransaction.description || index}`}
                    className="transaction-item"
                  >
                    <Box
                      marginLeft={14}
                      minWidth={"32%"}
                      display={"flex"}
                      margin="10px"
                    >
                      {
                        iconBasedOnType[
                          transaction.newTransaction.transactionType
                        ]
                      }
                      <Text
                        fontSize={"lg"}
                        fontWeight={"bold"}
                        className="description"
                      >
                        {transaction.newTransaction.description}
                      </Text>
                    </Box>
                    <Box display={"flex"} minWidth={"15%"}>
                      <Text marginRight={2}>Date: </Text>
                      <Text className="description">
                        {convertMonthPattern(transaction.newTransaction.date)}
                      </Text>
                    </Box>
                    <Box className="item-box" minWidth={"20%"}>
                      <Text marginRight={2}>Category:</Text>
                      <Tag size={"md"} variant={"solid"} colorScheme="gray">
                        {transaction.newTransaction.category}
                      </Tag>
                    </Box>
                    <Box className="anex-box" minWidth={"15%"}>
                    
                      <Text marginLeft={10} fontSize={18}>
                        ₹{" "}
                        {handleAmountIntToFloat(
                          transaction.newTransaction.amount
                        )}
                      </Text>
                    </Box>
                  </ListContainer>
                );
              }
              return null;
            }
          );
        })
      ) : (
        <SpinnerContainer>
          <Spinner size={"xl"} />
        </SpinnerContainer>
      )}
    </>
  );
};
