import { Avatar, Box, HStack, Text, Tooltip } from "@chakra-ui/react";
import {
  ChartBar,
  ChartLineUp,
  HouseLine,
  SignOut,
} from "@phosphor-icons/react";
import { Sidebar } from "./styles";

export const SidebarComponent = () => {
  return (
    <Sidebar>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Text textAlign={"center"} fontSize={"2xl"} fontWeight={"bold"}>
          Dhan-Savvy.
        </Text>
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          marginY={5}
          size="2xl"
          border="5px solid #fff"
        />
        <Text fontSize="lg" marginTop={1}>
          User
        </Text>
        <HStack
          display={"flex"}
          flexDirection={"column"}
          marginTop={16}
          spacing={9}
          cursor={"pointer"}
        >
          <Tooltip label="Home" placement="bottom">
            <HouseLine size={32} weight="fill" />
          </Tooltip>
          <Tooltip label="Transactions" placement="bottom">
            <ChartLineUp size={32} weight="fill" />
          </Tooltip>
          <Tooltip label="Dashboard" placement="bottom">
            <ChartBar size={32} weight="fill" />
          </Tooltip>
        </HStack>
      </Box>
      <Tooltip label="Log Out" placement="top">
        <SignOut size={32} weight="fill" cursor={"pointer"} />
      </Tooltip>
    </Sidebar>
  );
};
