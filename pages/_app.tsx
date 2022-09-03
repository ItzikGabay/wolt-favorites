import type { AppProps } from 'next/app';
import '../styles/base/_reset.scss';
import '../styles/base/_globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
