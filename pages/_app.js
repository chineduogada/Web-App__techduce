import "@styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Application;
