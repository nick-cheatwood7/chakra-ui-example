import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { VStack, Heading, Button, useColorMode } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {(formik) => (
          <Form>
            <Button
              variant="ghost"
              pos="absolute"
              inset="0 0 auto auto"
              m="4"
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <MoonIcon color="gray" /> : <SunIcon />}
            </Button>
            <VStack justify="center" height="100vh" spacing="5">
              <Heading textAlign="center">React + Chakra UI = ❤️</Heading>
              <InputField
                name="username"
                placeholder="username"
                label="Username"
              />
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
              <Button
                width="40%"
                type="submit"
                colorScheme="teal"
                variant="outline"
                isLoading={formik.isSubmitting}
              >
                Sign Up
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
