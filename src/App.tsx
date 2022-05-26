import React from "react";
import { Container } from "@chakra-ui/react";
import { Banner } from "./components/Banner";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Banner />
      <Container maxW="full">
        <Outlet />
      </Container>
    </>
  );
};

export default App;
