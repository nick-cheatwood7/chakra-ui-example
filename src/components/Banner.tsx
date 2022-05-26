import React from "react";
import {
  Box,
  Heading,
  Image,
  Stack,
  Button,
  Container,
  useColorMode,
} from "@chakra-ui/react";
import brandLogo from "../logo.svg";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

interface BannerProps {}

export const Banner: React.FC<BannerProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav>
      <Container w="100%" maxW="full">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          ml="6"
          mr="6"
          w="100%"
        >
          {/* Logo */}
          <Link to="/">
            <Box>
              <Stack direction="row" alignItems="center">
                <Image boxSize="55px" src={brandLogo} alt="brand logo" />
                <Heading as="h2" size="md">
                  React + Chakra UI Example
                </Heading>
              </Stack>
            </Box>
          </Link>
          {/* Login/signup */}
          <Box>
            <Button variant="ghost" m="4" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon color="gray" /> : <SunIcon />}
            </Button>
            <Link to="/signin">
              <Button mr="6" variant="link">
                Sign In
              </Button>
            </Link>
            <Link to="signup">
              <Button mr="12" colorScheme="teal" variant="solid">
                Sign Up
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </nav>
  );
};
