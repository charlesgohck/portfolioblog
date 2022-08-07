import '../styles/globals.css';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
    
    return <>
        <Head>
            <link rel="icon" href="/assets/portfolio/favicon.jpg" />
        </Head>
        <Script 
            strategy="lazyOnload"
            src={'https://www.googletagmanager.com/gtag/js?id=G-BL8F2LV9FH'}
        />
        <Script id='googleAnalyticsLoadScript' strategy="lazyOnload">
            {
                `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-BL8F2LV9FH');
                `
            }
        </Script>
        <Component {...pageProps} />
    </>
}

export default MyApp;