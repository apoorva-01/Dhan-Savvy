import { InvestmentContainer } from "./styles";
import { Box, Heading, Text } from "@chakra-ui/react";
import { InfoCard } from "./components/InfoCard";
import { Header } from "./components/Header";
import { CustomButton } from "./styles";
import { TransactionContext } from "../../context/transactionContext";
import { useState, useContext } from "react";
import {
  Radio,
  RadioGroup,
  Stack,
  Table,
  Tbody,
  Tr,
  Td,
  Spinner,
} from "@chakra-ui/react";
export const Investment = () => {
  const { totalSavings } = useContext(TransactionContext)!;
  const [percent, setPercent] = useState("20");
  const [showTable, setShowTable] = useState(false);
  const [amountInvested, setAmountInvested] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function generateInvestement() {
    setIsLoading(true);
    setTimeout(() => {
      const investedAmount = (percent / 100) * totalSavings;
      setAmountInvested(investedAmount);
      setShowTable(true);
      setIsLoading(false);
    }, 3000); // Simulating a delay of 1 second for demonstration
  }
  return (
    <InvestmentContainer>
      <Header />

      <Box
        className="infocard-display"
        display={"flex"}
        justifyContent={"space-between"}
        margin="20px 0"
      >
        <InfoCard type="Incomes" />
        <InfoCard type="Expenses" />
        <InfoCard type="Savings" />
        <InfoCard type="Investments" />
      </Box>

      <Box height={"30vh"}>
        <Heading className="heading" size="md">
          Expected Savings
        </Heading>
        <Stack direction="row" spacing="24px">
          <RadioGroup onChange={setPercent} value={percent}>
            <Text className="paragraph">
              How much % of savings do you want to Invest?
            </Text>
            <Stack direction="row">
              <Radio value="20">20%</Radio>
              <Radio value="30">30%</Radio>
            </Stack>
          </RadioGroup>
          <CustomButton onClick={generateInvestement}>Generate</CustomButton>
        </Stack>
        {isLoading && (
          <Box mt={4}>
            <Spinner size="md" />
            <Text mt={2}>Loading...</Text>
          </Box>
        )}

        {showTable && !isLoading && (
          <Box mt={4}>
            <Heading size="md">AI Recommended Investment Plan</Heading>
            <Table variant="striped" colorScheme="teal" mt={2}>
              <Tbody>
                <Tr>
                  <Td>Stocks (30%)</Td>
                  <Td>₹{(30 / 100) * amountInvested}</Td>
                </Tr>
                <Tr>
                  <Td>Fixed Deposit (20%)</Td>
                  <Td>₹{(20 / 100) * amountInvested}</Td>
                </Tr>
                <Tr>
                  <Td>SIP (30%)</Td>
                  <Td>₹{(30 / 100) * amountInvested}</Td>
                </Tr>
                <Tr>
                  <Td>Crypto (5%)</Td>
                  <Td>₹{(5 / 100) * amountInvested}</Td>
                </Tr>
                <Tr>
                  <Td>Gold (15%)</Td>
                  <Td>₹{(15 / 100) * amountInvested}</Td>
                </Tr>
                <Tr>
                  <Td>
                    <b>Total Savings</b>
                  </Td>
                  <Td>
                    <b>₹{amountInvested}</b>
                  </Td>
                </Tr>
              </Tbody>
            </Table>

            <br />
            <Text className="paragraph" style={{marginTop:"2rem"}} >
              Total Savings in a Year = {totalSavings * 12}
            </Text>
            <Text className="paragraph" style={{marginBottom:"2rem"}}>
              Money if Invested in a Year ={" "}
              {totalSavings * 12 + (18 / 100) * totalSavings}
            </Text>
          </Box>
        )}
      </Box>
    </InvestmentContainer>
  );
};
