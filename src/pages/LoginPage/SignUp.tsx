import {
  Box,
  Heading,
  Text,
  Stack,
  Input,
  InputRightElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import { CustomButton } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authenticationContext";

export const SignUp = () => {
  const [show, setShow] = useState(false);
  const { email, setEmail, password, setPassword } = useContext(AuthContext)!;
  const handleClick = () => setShow(!show);

  return (
    <Box w="80%" margin={"auto"}>
      <Heading textAlign={"center"} textTransform={"uppercase"} size="lg">
        <strong>register.</strong>
      </Heading>
      <Text textAlign={"center"} padding="5px 0 40px">
        Please, fill the fields below to sign up!
      </Text>
      <Stack spacing={3}>
        <Input
          value={email}
          placeholder="Enter username"
          size="lg"
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputGroup size="lg">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text padding="25px 0" textAlign={"right"} fontSize={"sm"}>
          Recovery Password
        </Text>
        <CustomButton type="submit">Sign</CustomButton>
      </Stack>
    </Box>
  );
};
