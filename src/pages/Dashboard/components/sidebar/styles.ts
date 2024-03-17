import styled from "styled-components";

export const Sidebar = styled.nav`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  background-color: ${(props) => props.theme.colors.purple500};
  color: ${(props) => props.theme.colors.white};

  .title {
    @media (max-width: 1392px) {
      font-size: 1.2rem;
    }

    @media (max-width: 1050px) {
      font-size: 1rem;
    }
  }

  .sidebar-avatar {
    @media (max-width: 1050px) {
      display: none;
    }
  }

  .user-name {
    @media (max-width: 1050px) {
      margin-top: 20px;
    }
  }

  .sidebar-icons {
  }
`;
