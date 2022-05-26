import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import theme from "./theme";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Register from "./views/register";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* <App /> */}
      <Register />
    </ChakraProvider>
  </React.StrictMode>
);
