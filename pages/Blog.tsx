import type { NextPage } from 'next';
import React, { ReactNode } from 'react';
import Head from 'next/head';
import AntiNextMenu from '../components/AntNextMenu';

const Blog: NextPage = () => {
    return <>
        <Head>
            <title>Charles Goh&apos;s Porfolio &amp; Blog</title>
            <meta name="description" content="Charles Goh's Portfolio Blog" />
        </Head>
        <AntiNextMenu activeKeys={["blog"]} />
        <h1>Hello World</h1>
    </>
}

export default Blog;