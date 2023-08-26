import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Theme from "./Styles/Theme";
import ContextProvider from "./Redux/Context";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ContextProvider>
      <BrowserRouter>
        <ChakraProvider theme={Theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </ContextProvider>
  </Provider>
);
