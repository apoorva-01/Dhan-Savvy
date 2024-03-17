import { Box, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box display={"flex"}>
      <Box flex={1}>
        <Text fontSize={"lg"} fontWeight={"bold"}>
          Dashboard
        </Text>
        <Text>Payment updates</Text>
      </Box>
    </Box>
  );
};
