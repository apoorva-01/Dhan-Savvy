import { Box, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box display={"flex"}>
      <Box flex={1}>
        <Text fontSize={"lg"} fontWeight={"bold"}>
          Investment
        </Text>
        {/* <Text>Updates</Text> */}
      
      </Box>
    </Box>
  );
};
