import styled from "styled-components";

export const DashboardContent = styled.main`
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

  .infocard-display {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .infocard-display > div {
    width: calc(25% - 10px) !important;
    margin-bottom: 20px !important;
  }

  @media (max-width: 624px) {
    .infocard-display > div {
      width: calc(50% - 10px) !important;
    }
  }
`;
