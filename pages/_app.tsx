import '../styles/globals.css';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import { Menu, MenuTheme, Switch } from 'antd';
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';
import Portfolio from '.';

const items: MenuProps['items'] = [
    // {
    //     label: 'Logo',
    //     key: "Charles Goh",
    //     icon: <HomeOutlined />,
    //     disabled: false
    // },
    {
        label: 'Portfolio',
        key: 'portfolio',
        icon: <HomeOutlined />,
        disabled: false
    },
    {
        label: 'Blog',
        key: 'blog',
        icon: <AppstoreOutlined />,
        disabled: false,
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