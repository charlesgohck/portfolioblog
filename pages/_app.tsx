import '../styles/globals.css';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <Head>
            <link rel="icon" href="/assets/portfolio/favicon.jpg" />
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp;