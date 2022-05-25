import React from "react";
import {
  Button,
  Container,
  Input,
  Stack,
  Switch,
  useColorMode,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";

const App: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Container maxW="md" height="100vh">
      <Button
        pos="absolute"
        inset="0 0 auto auto"
        m="4"
        onClick={toggleColorMode}
      >
        ?
      </Button>
      <VStack justify="center" height="100%" spacing="4">
        <Heading textAlign="center">React + Chakra UI = ❤️</Heading>
        <Input placeholder="username" />
        <Input placeholder="password" type="password" />
        <Button colorScheme="teal" variant="outline" width="100%">
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
