import { Container } from '@mui/material';
import React from 'react';
import type { AppProps } from 'next/app';

import { SnackbarProvider } from '@contexts/SnackbarContext';
import '@styles/global.css';

export default function Application({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <SnackbarProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </SnackbarProvider>
    </React.StrictMode>
  );
}
