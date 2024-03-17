import {
  Box,
  Card,
  IconButton,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { PencilSimple, TrashSimple } from "@phosphor-icons/react";
import { handleAmountIntToFloat } from "../../../../utils/fixAmountValue";
import { convertMonthPattern } from "../../../../utils/convertMonthPattern";
import { AuthContext } from "../../../../context/authenticationContext";
import { FirebaseDataContext } from "../../../../context/firebaseDataContext";
import {
  getAllTransactions,
  removeTransaction,
} from "../../../../data/firebase";
import { TransactionData } from "../../../Dashboard/components/dashboardContent/components/TransactionsList";

export const TransactionsTable = () => {
  const { userId } = useContext(AuthContext)!;

  const { setTransactionsArray } = useContext(FirebaseDataContext);
  const { setFirebaseData } = useContext(FirebaseDataContext);

  const [getTransactionsFromDb, setGetTransactionsFromDb] =
    useState<TransactionData[]>();

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
          setTransactionsArray(transactions);
          setFirebaseData(transactions);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("An error occurred while fetching the data", error);
      }
    };

    fetchData();
  }, [userId, setTransactionsArray, setFirebaseData]);

  // console.log("getTransactionsFromDb", getTransactionsFromDb);

  return (
    <Card padding="20px" borderRadius="5px">
      <TableContainer className="table-container">
        <Table size="sm" variant="striped">
          <Thead>
            <Tr>
              <Th>Transactions</Th>
              <Th>Amount</Th>
              <Th>Date</Th>
              <Th>Category</Th>
              <Th>Type</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {getTransactionsFromDb ? (
              getTransactionsFromDb.map((transactionGroup: TransactionData) => {
                return Object.values(transactionGroup).map(
                  (transaction: TransactionData) => {
                    if (transaction.newTransaction) {
                      return (
                        <Tr key={transaction.id}>
                          <Td>
                            <Text>
                              {transaction.newTransaction.description}
                            </Text>
                          </Td>
                          <Td>
                            <Text>
                              ₹{" "}
                              {handleAmountIntToFloat(
                                transaction.newTransaction.amount
                              )}
                            </Text>
                          </Td>
                          <Td>
                            {convertMonthPattern(
                              transaction.newTransaction.date
                            )}
                          </Td>
                          <Td>
                            <Tag
                              size={"md"}
                              variant={"solid"}
                              colorScheme="gray"
                            >
                              {transaction.newTransaction.category}
                            </Tag>
                          </Td>
                          <Td>{transaction.newTransaction.transactionType}</Td>
                          <Td>
                            <Box>
                              <IconButton
                                style={{
                                  backgroundColor: "#0077B6",
                                  color: "white",
                                }}
                                aria-label="Edit transaction"
                                icon={<PencilSimple size={20} />}
                                marginRight={2}
                              />
                              <IconButton
                                style={{
                                  backgroundColor: "red",
                                  color: "white",
                                }}
                                aria-label="Delete transaction"
                                icon={
                                  <TrashSimple
                                    size={20}
                                    onClick={() =>
                                      removeTransaction(userId, transaction.id)
                                    }
                                  />
                                }
                              />
                            </Box>
                          </Td>
                        </Tr>
                      );
                    }
                  }
                );
              })
            ) : (
              <Spinner />
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};
