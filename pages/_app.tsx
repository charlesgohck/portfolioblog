import '../styles/globals.css';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import { Menu } from 'antd';
import { BookOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';
import Portfolio from '.';

const items: MenuProps['items'] = [
    {
        label: 'Portfolio',
        key: 'portfolio',
        icon: <HomeOutlined />,
        disabled: false
    },
    {
        label: 'Blog',
        key: 'blog',
        icon: <BookOutlined />,
        disabled: true,
    },
]

function MyApp({ Component, pageProps }: AppProps) {

    const [current, setCurrent] = useState('portfolio');

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <>
        <Menu theme={"dark"} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <Portfolio/>
    </>
}

export default MyApp;