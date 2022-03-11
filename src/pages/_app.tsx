import { Container } from '@mui/material';
import React from 'react';

import { SnackbarProvider } from '../contexts/SnackbarContext';
import '../styles/bingo.css';

export default function Application({ Component, pageProps }: { Component: any; pageProps: any }) {
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
