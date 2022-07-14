import type { NextPage } from 'next';
import Head from 'next/head';
import { Image, Spin, Carousel } from 'antd';
import React from 'react';

const Portfolio: NextPage = () => {
    return <>
        <Head>
            <title>Charles Goh's Porfolio Blog</title>
            <meta name="description" content="Charles Goh's Portfolio Blog" />
            <link rel="icon" href="/assets/portfolio/favicon.jpg" />
        </Head>
        <Carousel autoplay autoplaySpeed={5000}>
            <div>
                <Image preview={false} style={{ display: 'flex', justifyContent: "center", overflowY: "hidden" }} src="/assets/portfolio/CharlesInSuit.jpg" placeholder={<Spin tip="Loading"/>} />
            </div>
            <div>
                <Image preview={false} style={{ display: 'flex', justifyContent: "center", overflowY: "hidden" }} src="/assets/portfolio/portfolio-carousel-pic-3.jpg" placeholder={<Spin tip="Loading"/>}/>
            </div>
        </Carousel>
    </>
}

export default Portfolio
