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
import { Link as RouterLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCurrentModule } from "../redux/reducers/nav";

interface BannerProps {}

export const Banner: React.FC<BannerProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  return (
    <nav>
      <Container w="100%" maxW="full">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          ml=""
          mr="6"
          w="100%"
        >
          {/* Logo */}
          <RouterLink to="/">
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                onClick={() => dispatch(setCurrentModule("home"))}
              >
                <Image boxSize="55px" src={brandLogo} alt="brand logo" />
                <Heading as="h2" size="md">
                  React + Chakra UI Example
                </Heading>
              </Stack>
            </Box>
          </RouterLink>
          {/* Login/signup */}
          <Box alignItems="center" display="flex">
            <Button variant="ghost" m="4" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon color="gray" /> : <SunIcon />}
            </Button>

            <Box display="inline" mr="12" hidden={isLoggedIn}>
              <RouterLink to="/signin">
                <Button mr="6" variant="link">
                  Sign In
                </Button>
              </RouterLink>

              <Box display="inline">
                <RouterLink to="signup">
                  <Button colorScheme="teal" variant="solid">
                    Sign Up
                  </Button>
                </RouterLink>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </nav>
  );
};
