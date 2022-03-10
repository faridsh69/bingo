import React from "react";
import { ToastProvider } from "../contexts/ToastContext";
import Toast from "../layouts/Toast";

export default function Application({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <ToastProvider>
        <Component {...pageProps} />
        <Toast />
      </ToastProvider>
    </React.StrictMode>
  );
}
