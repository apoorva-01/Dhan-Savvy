import { Box, Text } from "@chakra-ui/react";

import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import { TransactionInfoContainer } from "./styles";
import { useContext, useState } from "react";
import { TransactionContext } from "../../../../context/transactionContext";

export const ShowMonthlyInfo = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  const { totalIncomes, totalExpenses, totalBalance } =
    useContext(TransactionContext)!;

  const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const showTransactionsByMonth = (direction: string) => {
    let newMonth = currentMonth;

    if (direction === "previous") {
      newMonth -= 1;
    } else if (direction === "next") {
      newMonth += 1;
    }

    if (newMonth < 1) newMonth = 12;
    if (newMonth > 12) newMonth = 1;

    setCurrentMonth(newMonth);
  };

  const monthName = MONTH_NAMES[currentMonth - 1];

  return (
    <TransactionInfoContainer
      display={"flex"}
      flexDirection={"row"}
      padding="20px 15px"
    >
      <Box className="search-engine">
        <ArrowCircleLeft
          className="search-icon"
          size={32}
          weight="fill"
          cursor={"pointer"}
          onClick={() => showTransactionsByMonth("previous")}
        />
        <Text margin="0 10px">{monthName}</Text>
        <ArrowCircleRight
          className="search-icon"
          size={32}
          weight="fill"
          cursor={"pointer"}
          onClick={() => showTransactionsByMonth("next")}
        />
      </Box>
      <Box w={"10%"}>
        <Text className="transactions-title">Incomes</Text>
        <Text>₹ {totalIncomes.toFixed(2)}</Text>
      </Box>
      <Box w={"10%"}>
        <Text className="transactions-title">Expenses</Text>
        <Text>₹ {totalExpenses.toFixed(2)}</Text>
      </Box>
      <Box w={"10%"}>
        <Text className="transactions-title">Balance</Text>
        <Text>₹ {totalBalance.toFixed(2)}</Text>
      </Box>
    </TransactionInfoContainer>
  );
};
