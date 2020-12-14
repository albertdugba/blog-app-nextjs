import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer/Footer";
import { Center } from "../components/Center/style";
import { Header } from "../components/Header/Header";
import { GlobalStyle, theme } from "../components/shared/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>Whats Next</Head>
      <Header />
      <main className="main">
        <Center>
          <Component {...pageProps} />
        </Center>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
