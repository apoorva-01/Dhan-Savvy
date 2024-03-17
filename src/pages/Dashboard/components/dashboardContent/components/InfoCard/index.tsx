import { Text } from "@chakra-ui/react";
import { CardContainer } from "./styles";
import { Bank, MinusCircle, Money, PiggyBank } from "@phosphor-icons/react";
import { TransactionContext } from "../../../../../../context/transactionContext";
import { useContext } from "react";
import { handleAmountIntToFloat } from "../../../../../../utils/fixAmountValue";

interface InfoCardProps {
  type: "Expenses" | "Savings" | "Investments" | "Incomes";
}

export const InfoCard = ({ type }: InfoCardProps) => {
  const { totalIncomes, totalExpenses, totalSavings, totalInvestments } =
    useContext(TransactionContext)!;

  const formattedSavings =
    typeof totalSavings === "number" ? handleAmountIntToFloat(totalSavings) : 0;
  const formattedInvestments =
    typeof totalInvestments === "number"
      ? handleAmountIntToFloat(totalInvestments)
      : 0;

  const iconsByTypes = {
    Expenses: <MinusCircle fontSize={70} weight="regular" className="icon" />,
    Incomes: <Money fontSize={70} weight="regular" className="icon" />,
    Savings: <PiggyBank fontSize={70} weight="regular" className="icon" />,
    Investments: <Bank fontSize={70} weight="regular" className="icon" />,
  };

  // Use os valores formatados para exibir
  const renderAmountByType = {
    Expenses: totalExpenses,
    Incomes: totalIncomes,
    Savings: formattedSavings,
    Investments: formattedInvestments,
  };

  const icon = iconsByTypes[type];

  return (
    <CardContainer backgroundColor={type}>
      <Text className="paragraph" color={type}>
      ₹{handleAmountIntToFloat(renderAmountByType[type])}{" "}
        {/* Renderiza o valor formatado */}
      </Text>
      {icon}{" "}
      <Text className="operationType" fontSize={"lg"}>
        {type}
      </Text>
    </CardContainer>
  );
};
