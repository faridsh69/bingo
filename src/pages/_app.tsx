import type { AppProps } from "next/app";
import "../styles/bingo.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
