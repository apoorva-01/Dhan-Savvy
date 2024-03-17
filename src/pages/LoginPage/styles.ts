import { Button } from "@chakra-ui/react";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 60vw;
  margin: 80px auto;
  border-radius: 22px;
  padding: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 810px) {
    flex-direction: column;
    width: 80vw;
    height: 70vh;
  }

  @media (max-width: 400px) {
    width: 90vw;
    height: 80vh;
  }
`;

export const AnimationContainer = styled.div`
  flex: 1;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.purple500};
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 810px) {
    flex: 0;
    width: 100%;
    height: 200px;
  }

  img {
    width: 80%;
    height: 80%;

    @media (max-width: 810px) {
      width: 100%;
      height: 100%;
    }
  }
`;

export const FormContainer = styled.form`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  strong {
    color: ${(props) => props.theme.colors.purple500};
    cursor: pointer;
  }

  @media (max-width: 810px) {
    // flex: 0;
    width: 100%;
    height: 100vh;
  }
}
`;

export const CustomButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.purple700} !important;
  color: ${(props) => props.theme.colors.white} !important;
  transition: background-color 0.3s ease-in-out !important;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple500} !important;
  }
`;
