import React from "react";
import {
  Button,
  Container,
  Input,
  useColorMode,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const App: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="md" height="100vh">
      <Button
        variant="ghost"
        pos="absolute"
        inset="0 0 auto auto"
        m="4"
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <MoonIcon color="gray" /> : <SunIcon />}
      </Button>
      <VStack justify="center" height="100%" spacing="5">
        <Heading textAlign="center">React + Chakra UI = ❤️</Heading>
        <Input placeholder="username" />
        <Input placeholder="password" type="password" />
        <Button colorScheme="teal" variant="outline" width="75%">
          Log In
        </Button>
        <Button colorScheme="gray" variant="link">
          Forgot Password?
        </Button>
      </VStack>
    </Container>
  );
};

export default App;
