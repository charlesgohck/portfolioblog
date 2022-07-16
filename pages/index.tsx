import type { NextPage } from 'next';
import Head from 'next/head';
import { Avatar, Row, Col, Typography, Divider, Button } from 'antd';
import React, { ReactNode, useState } from 'react';
import {
    LinkedinFilled
  } from '@ant-design/icons';
import { Parallax } from 'rc-scroll-anim';

const { Title, Paragraph } = Typography;

interface Ellipsis {
    rows: number,
    expandable: boolean,
    suffix: string,
    symbol: ReactNode,
    tooltip: boolean | ReactNode,
    onExpand: any,
    onEllipsis: any,
}

const Portfolio: NextPage = () => {

    const [ellipsis, setEllipsis] = useState(true);
    return <>
        <Head>
            <title>Charles Goh's Porfolio Blog</title>
            <meta name="description" content="Charles Goh's Portfolio Blog" />
            <link rel="icon" href="/assets/portfolio/favicon.jpg" />
        </Head>
        <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
            className="code-box-shape"
        >
            <Row style={{ paddingTop: "5%", display: 'flex', justifyContent: 'center' }}>
                <Col>
                    <Avatar src='/assets/portfolio/CharlesInSuitSquare.jpg' size={300} />
                </Col>
                <Col style={{ maxWidth: "60%" }}>
                    <Title>Hello. I am Charles Goh.</Title>
                    <Paragraph strong>I am a software engineer, problem solver, and learner.</Paragraph>
                    <Paragraph ellipsis={ellipsis ? { rows: 5, expandable: true, symbol: 'more' } : false}>
                        I am a full-stack software engineer, spearheading or collaborating to build web applications 
                        that automate infrastructure processes at scale for internal cloud solutions, with security and industry 
                        compliance best practices in mind. 
                    </Paragraph>
                    <Paragraph ellipsis={ellipsis ? { rows: 5, expandable: true, symbol: 'more' } : false}>
                        I'm passionate about business problems, technology, 
                        world affairs, and health/fitness, and I aspire to make a lasting 
                        positive impact in the world through solving problems in tech.
                    </Paragraph>
                    <Paragraph strong>For professional/business related queries:</Paragraph>
                    <Button type="text" href={"https://www.linkedin.com/in/charlesgoh/"} target="_blank">
                        <LinkedinFilled width={100} style={{ fontSize: '50px', color: '#0A66C2' }} />
                    </Button>
                </Col>
            </Row>
        </Parallax>
        <Divider/>
    </>
}

export default Portfolio
