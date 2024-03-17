import { Card } from "@chakra-ui/react";
import styled from "styled-components";

export const TransactionInfoContainer = styled(Card)`
  justify-content: space-between;
  padding: 0px 20px;

  .search-engine {
    display: flex;
    flex-direction: space-between;
    align-items: center;

    .search-icon {
      color: ${(props) => props.theme.colors.purple500};
    }
  }
`;
