import React from "react";
import { Container } from "@chakra-ui/react";

interface WrapperProps {
  children: any;
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Container maxW={variant === "regular" ? "md" : "lg"} w="100%" mx="auto">
      {children}
    </Container>
  );
};
