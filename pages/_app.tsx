import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

import { WHITE } from '@src/components/atoms/colors';

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  background-color: ${WHITE};
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>클원 프론투 미숀</title>
        <meta name="author" content="클둥이들" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}

export default MyApp;

const Wrapper = styled.div`
  background-color: ${WHITE};
  width: 100%;
  max-width: 768px;
  height: fit-content;
  min-height: 100vh;
  margin: 0 auto;
  @media (min-width: 768px) {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
  }
`;
