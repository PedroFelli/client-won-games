import '../../styles/globals.css';
import { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>React Avançado - Boilerplate</Head>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="A simple project start to work with TypeScript, React, NextJS and  Styled Components"
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
