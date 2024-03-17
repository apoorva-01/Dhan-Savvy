import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  .fill {
    background-color: ${(props) => props.theme.colors.purple500};
  }
`;
