import React from "react";
import { Container, VStack } from "@chakra-ui/react";
import { RegisterCard } from "./components/RegisterCard";

const App: React.FC = () => {
  return (
    <Container maxW="md" w="100%">
      <VStack justify="center" height="100vh">
        <RegisterCard />
      </VStack>
    </Container>
  );
};

export default App;
