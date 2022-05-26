import { Text, VStack } from "@chakra-ui/react";
import React from "react";

interface CustomersProps {}

const Customers: React.FC<CustomersProps> = () => {
  return (
    <VStack justify="center" height="100%">
      <Text>Customers</Text>
    </VStack>
  );
};

export default Customers;
