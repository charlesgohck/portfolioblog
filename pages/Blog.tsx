import type { NextPage } from 'next';
import React, { ReactNode } from 'react';
import Head from 'next/head';
import AntiNextMenu from '../components/AntNextMenu';

const Blog: NextPage = () => {
    return <>
        <Head>
            <title>Charles Goh (长康) Blog</title>
            <meta name="description" content="Charles Goh's Blog" />
        </Head>
        <AntiNextMenu activeKeys={["blog"]} />
        <h1>Development in progress...</h1>
    </>
}

export default Blog;