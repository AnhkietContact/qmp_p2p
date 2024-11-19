import Head from "next/head";
import { Fragment, useEffect } from "react";
import { AppProps } from "next/app";
import { innerTheme } from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
import Toaster from "./ToastContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const MyPages = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
   
    AOS.init({
      duration: 1000,
      once: false, 
    });

    
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>QMP P2P</title>
      </Head>
      <ThemeProvider theme={innerTheme}>
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </Fragment>
  );
};

export default MyPages;
