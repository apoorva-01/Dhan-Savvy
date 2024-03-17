import { Card } from "@chakra-ui/react";
import styled from "styled-components";

export const CardContainer = styled(Card)`
  width: 23%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 22px !important;
  margin: 20px 0;
  cursor: pointer;
  padding: 1rem;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.3s ease-in-out;
  border: 1px solid ${(props) => props.theme.colors.purple200} !important;

  .operationType {
    color: ${(props) => props.theme.colors.gray700};
  }

  .paragraph {
    color: ${(props) => props.theme.colors.gray700};
    font-size: 1.3rem;
  }

  .icon {
    color: ${(props) => props.theme.colors.purple300};
  }

  &:hover {
    transform: scale(1.05);
  }
`;
