import { Container } from "@mui/material";
import React from "react";
import type { AppProps } from "next/app";

import { MuiProvider } from "@contexts/MuiContext";
import { SnackbarProvider } from "@contexts/SnackbarContext";

export default function Application({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <MuiProvider>
        <SnackbarProvider>
          <Container>
            <Component {...pageProps} />
          </Container>
        </SnackbarProvider>
      </MuiProvider>
    </React.StrictMode>
  );
}
