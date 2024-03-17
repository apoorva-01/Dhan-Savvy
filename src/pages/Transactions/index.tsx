import { Box, Text } from "@chakra-ui/react";
import { TransactionsContainer } from "./styles";
import { TransactionsTable } from "./components/Table";
import { InsertTransactionSection } from "./components/insertTransactionSection";
import { ShowMonthlyInfo } from "./components/showMonthlyInfo/showMonthlyInfo";

export const Transactions = () => {
  return (
    <TransactionsContainer>
      <Box>
        <Text fontSize={"xl"} fontWeight={"bold"} marginBottom={5}>
          Transactions
        </Text>
      </Box>
      <ShowMonthlyInfo />
      <InsertTransactionSection />
      <Box>
        <TransactionsTable />
      </Box>
    </TransactionsContainer>
  );
};
