import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Heading,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { Formik, Form } from "formik";
import { InputField } from "./InputField";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { login } from "../redux/reducers/auth";
import { Navigate } from "react-router-dom";

export const RegisterCard: React.FC = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  const { colorMode } = useColorMode();

  return (
    <Box
      borderRadius="lg"
      padding="6"
      width="75%"
      maxW="sm"
      bg={colorMode === "light" ? "white" : ""}
    >
      {isLoggedIn && <Navigate to="/" replace={true} />}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          console.log(values);
          alert(JSON.stringify(values, null, 2));
          dispatch(login());
          actions.resetForm();
        }}
      >
        {(formik) => (
          <Form>
            <Heading>Sign In</Heading>
            <VStack justify="center" mt="4" pb="3">
              <InputField
                label="Email Address"
                name="email"
                placeholder="name@example.com"
                icon={<EmailIcon color="gray.300" />}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                icon={<LockIcon color="gray.300" />}
              />
              <Box justifyItems="left" width="100%">
                <Checkbox>Remember me</Checkbox>
              </Box>
              <Button
                width="100%"
                type="submit"
                colorScheme="teal"
                isLoading={formik.isSubmitting}
              >
                Sign In
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
      <Divider mt="3" mb="3" />
      <VStack justify="center">
        <Text>Don't have an account?</Text>
        <Button width="100%" colorScheme="teal" variant="outline">
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
};
