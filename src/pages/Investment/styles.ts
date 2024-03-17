import styled from "styled-components";
import { Button } from "@chakra-ui/react";
export const InvestmentContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};

  .heading {
    color: ${(props) => props.theme.colors.gray700};
  }

  .paragraph {
    color: ${(props) => props.theme.colors.gray700};
  }
`;


export const CustomButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.purple700} !important;
  color: white !important;
  width: 120px;
  border: 1px solid ${(props) => props.theme.colors.purple700} !important;
  transition: all 0.3s ease-in-out !important;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple500} !important;
    color: white !important;
  }
`;
