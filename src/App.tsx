import React from "react";
import { Container } from "@chakra-ui/react";
import { Banner } from "./components/Banner";
import { Outlet } from "react-router-dom";
import { Layout } from "./components/Layout";
import { useAppSelector } from "./redux/hooks";

const App: React.FC = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <Container
      id="app"
      h="100%"
      maxW="100vw"
      display="flex"
      flexDirection="column"
    >
      <Banner />
      <Container id="content" maxW="full">
        <Layout showSidebar={isLoggedIn}>
          <Outlet />
        </Layout>
      </Container>
    </Container>
  );
};

export default App;
