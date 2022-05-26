import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import SignIn from "./routes/SignIn";
import { store } from "./redux/store";
import Customers from "./routes/Customers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="signin" element={<SignIn />} />
              <Route path="customers" element={<Customers />} />
            </Route>
            {/* <Route path="register" element={<Register />} /> */}
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </ReduxProvider>
  </React.StrictMode>
);
