// _app.tsx
import { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
