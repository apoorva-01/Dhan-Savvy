import {
  Avatar,
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  Tooltip,
} from "@chakra-ui/react";
import {
  ChartLineUp,
  HouseLine,
  SignOut,
  PiggyBank 
} from "@phosphor-icons/react";
import { Sidebar } from "./styles";
import { handleSignOut } from "../../../../utils/handleFirebaseAuth";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../context/authenticationContext";

export interface User {
  email: string;
  user: {
    email: string;
  };
}

export const SidebarComponent = ({ user }: User) => {
  const navigate = useNavigate();
  const { setIsAuthenticaded, userName, setUserName } =
    useContext(AuthContext)!;

  const handleSIgnOutAndNavigate = () => {
    handleSignOut();
    if (setIsAuthenticaded) {
      setIsAuthenticaded(false);
    }
    navigate("/");
  };

  return (
    <Sidebar>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
 
        <Avatar
          className="sidebar-avatar"
          name="User"
          src="./assets/profile.png"
          margin={1}
          size="lg"
          border="3px solid #fff"
        />
        {user?.email && (
          <Editable
            defaultValue={userName ?? user.email}
            className="user-name"
            fontSize="lg"
            marginTop={1}
            onSubmit={(value) => setUserName?.(value)}
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        )}
        <HStack
          display={"flex"}
          flexDirection={"column"}
          marginTop={6}
          spacing={9}
          cursor={"pointer"}
          className="sidebar-icons"
        >
          <Link to="/dashboard">
            <Tooltip label="Home" placement="bottom">
              <HouseLine size={32} weight="fill" />
            </Tooltip>
          </Link>
          <Link to="/transactions">
            <Tooltip label="Transactions" placement="bottom">
              <ChartLineUp size={32} weight="fill" />
            </Tooltip>
          </Link>
          <Link to="/investment">
            <Tooltip label="Investment" placement="bottom">
              <PiggyBank  size={32} weight="fill" />
            </Tooltip>
          </Link>
       
        </HStack>
      </Box>
      <Tooltip label="Log Out" placement="top">
        <SignOut
          onClick={() => handleSIgnOutAndNavigate()}
          size={32}
          weight="fill"
          cursor={"pointer"}
        />
      </Tooltip>
    </Sidebar>
  );
};
