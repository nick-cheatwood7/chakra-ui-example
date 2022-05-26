import { VStack } from "@chakra-ui/react";
import React from "react";
import { RegisterCard } from "../components/RegisterCard";

interface signInProps {}

const signIn: React.FC<signInProps> = () => {
  return (
    <VStack justify="center" height="100%">
      <RegisterCard />
    </VStack>
  );
};

export default signIn;
