import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  max-width: 100%;
  padding: 0px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.gray800};
  box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.15) !important;
  border: 1px solid ${(props) => props.theme.colors.purple300};
  cursor: pointer;

  @media (max-width: 680px) {
    padding: 5px 10px;
  }

  .first-box {
    display: flex;
    width: 40%;
    max-width: 40%;

    @media (max-width: 680px) {
      width: 25%;
      max-width: 25%;
    }
  }

  .description {
    color: ${(props) => props.theme.colors.gray700};
    margin-left: 10px;
  }

  .item-box {
    display: flex;
    justify-content: center;
    width: 35%;
    max-width: 35%;
  }

  .anex-box {
    display: flex;
    align-items: center;
    width: 20%;
    max-width: 20%;
  }
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
