import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyle, { COLORS } from "./styles/global.ts";
import { AuthProvider } from "./context/authenticationContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { TransactionProvider } from "./context/transactionContext.tsx";
import { FirebaseDataProvider } from "./context/firebaseDataContext.tsx";

const theme = {
  colors: COLORS,
};

const RootComponent = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FirebaseDataProvider>
          <TransactionProvider>
            <BrowserRouter>
              <ChakraProvider>
                <AuthProvider>
                  <App />
                </AuthProvider>
              </ChakraProvider>
            </BrowserRouter>
          </TransactionProvider>
        </FirebaseDataProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<RootComponent />);
