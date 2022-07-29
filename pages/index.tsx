import type { NextPage } from 'next';
import Head from 'next/head';
import { Avatar, Row, Col, Typography, Divider, Button, Timeline, List } from 'antd';
import React, { ReactNode } from 'react';
import AntiNextMenu from '../components/AntNextMenu';
import {
    LinkedinFilled,
    MailFilled,
    ClockCircleFilled,
    LaptopOutlined,
    BookOutlined,
    CodeOutlined,
    DatabaseOutlined,
    ExperimentOutlined,
    SecurityScanOutlined,
    CloudOutlined,
    EditOutlined,
    CustomerServiceOutlined,
    UsergroupAddOutlined,
    FileWordOutlined,
    FundProjectionScreenOutlined,
    FontSizeOutlined
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

interface SkillsData {
    title: string,
    avatar: any,
    description: string
}

const Portfolio: NextPage = () => {

    const technicalSkillsData: SkillsData[] = [
        {
            title: 'Programming & Markup Languages',
            avatar: <CodeOutlined/>,
            description: "Python, Java, Javscript, C#, HTML + CSS, Markdown"
        },
        {
            title: 'Full-Stack Development Technologies',
            avatar: <ExperimentOutlined/>,
            description: "ReactJS, Angular, Spring/Springboot, jQuery, .NET Framework, REST APIs"
        },
        {
            title: 'Databases',
            avatar: <DatabaseOutlined/>,
            description: "SQL, NoSQL"
        },
        {
            title: 'Software Security',
            avatar: <SecurityScanOutlined/>,
            description: "Checkmarx, Blackduck, SAML2 Auth, OAuth, Enterprise B2E Security Libraries"
        },
        {
            title: 'Software & IT Service Management',
            avatar: <CustomerServiceOutlined/>,
            description: "Github/Bitbucket, Jira, ServiceNow"
        },
        {
            title: 'UI Design',
            avatar: <EditOutlined/>,
            description: "Sketch, Adobe XD, Balsamiq"
        },
        {
            title: 'Cloud',
            avatar: <CloudOutlined/>,
            description: "AWS Certified Cloud Practitioner"
        }
    ];

    const nonTechnicalSkillsData: SkillsData[] = [
        {
            title: 'Office Productivity',
            avatar: <FileWordOutlined/>,
            description: "Microsoft Word, Powerpoint, Excel, Outlook, Visio and Google Workspace Equivalents"
        },
        {
            title: 'Language Proficiency',
            avatar: <FontSizeOutlined/>,
            description: "English (First Language), Chinese (Second Language)"
        },
        {
            title: 'Other',
            avatar: <FundProjectionScreenOutlined/>,
            description: "Project Management, Problem Solving, Strategic Thinking, Collaboration, Communication"
        }
    ];

    return <>
        <Head>
            <title>Charles Goh&apos;s Porfolio &amp; Blog</title>
            <meta name="description" content="Charles Goh's Portfolio Blog" />
        </Head>
        <AntiNextMenu activeKeys={[""]}/>
        <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.8] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
            className="code-box-shape"
        >
            <Row style={{ paddingTop: "5%", display: 'flex', justifyContent: 'center' }}>
                <Col>
                    <Avatar src='/assets/portfolio/CharlesInSuitSquare.jpg' size={300} />
                </Col>
                <Col style={{ maxWidth: "60%" }}>
                    <Title>Hello. I am Charles Goh (长康).</Title>
                    <Paragraph strong>I am an engineer, problem solver, and learner.</Paragraph>
                    <Paragraph ellipsis={{ rows: 5, expandable: true, symbol: 'more' }}>
                        I work as a full-stack software engineer, building web applications 
                        that automate infrastructure processes for internal cloud solutions, with security and industry 
                        compliance best practices in mind. 
                    </Paragraph>
                    <Paragraph ellipsis={{ rows: 5, expandable: true, symbol: 'more' }}>
                        I&apos;m passionate about business problems, technology, 
                        world affairs, and health/fitness. I aspire to make a lasting 
                        positive impact in the world through solving problems in tech.
                    </Paragraph>
                    <Button type="text" href={"https://www.linkedin.com/in/charlesgoh/"} target="_blank">
                        <LinkedinFilled width={100} style={{ fontSize: '60px', color: '#0A66C2' }} />
                    </Button>
                    <Button type="text" href={"mailto:charlesgohck@charlesgohck.com"} target="_blank">
                        <MailFilled width={100} style={{ fontSize: '60px', color: 'darkred' }} />
                    </Button>
                </Col>
            </Row>
        </Parallax>
        <Divider/>
        <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.8] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
            className="code-box-shape"
        >
            <Row style={{ paddingTop: "1%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col>
                    <Title>Experience</Title>
                    <Timeline>
                        <Timeline.Item dot={<ClockCircleFilled className="timeline-clock-icon" />} color="crimson">
                            October 2020 - Present: <strong>Software Engineer (Assoc Systems Administrator) @ Visa</strong>
                        </Timeline.Item>
                        <Timeline.Item color="crimson">May 2019 - August 2019: <strong>Software Engineer (Systems Administrator) Intern @ Visa</strong></Timeline.Item>
                        <Timeline.Item color="crimson">December 2013 - December 2015: <strong>Full-Time National Serviceman @ Singapore Armed Forces</strong></Timeline.Item>
                    </Timeline>
                </Col>
                <Col style={{ paddingLeft: "5%" }}>
                    <LaptopOutlined width={100} style={{ fontSize: '100px', color: 'darkred' }} />
                </Col>
            </Row>
        </Parallax>
        <Divider/>
        <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.8] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
            className="code-box-shape"
        >
            <Row style={{ paddingTop: "1%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col style={{ paddingRight: "5%" }}>
                    <BookOutlined width={100} style={{ fontSize: '100px', color: 'darkred' }} />
                </Col>
                <Col>
                    <Title>Education</Title>
                    <Timeline>
                        <Timeline.Item dot={<ClockCircleFilled className="timeline-clock-icon" />} color="crimson">
                            January 2022 - Present: <strong>Master of Science in Computer Science @ Georgia Institute of Technology</strong>
                        </Timeline.Item>
                        <Timeline.Item color="crimson">
                            August 2016 - May 2020: <strong>Bachelor of Computing (Distinction Honours) in Computer Science 
                            <br/>with Minor in Management @ National University of Singapore</strong>
                        </Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
        </Parallax>
        <Divider/>
        <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.8] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
            className="code-box-shape"
        >
            <Row style={{ paddingTop: "1%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col style={{ minWidth: "45%" }}>
                    <Title>Technical Skills</Title>
                    <List
                        itemLayout="horizontal"
                        dataSource={technicalSkillsData}
                        renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={item.avatar}
                                title={item.title}
                                description={item.description}
                            />
                        </List.Item>
                        )}
                    />
                </Col>
                <Col style={{ paddingLeft: "5%" }}>
                    <CodeOutlined width={100} style={{ fontSize: '100px', color: 'darkred' }} />
                </Col>
            </Row>
        </Parallax>
        <Divider/>
        <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.8] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
            className="code-box-shape"
        >
            <Row style={{ paddingTop: "1%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col style={{ paddingRight: "5%" }}>
                    <UsergroupAddOutlined width={100} style={{ fontSize: '100px', color: 'darkred' }} />
                </Col>
                <Col style={{ minWidth: "45%" }}>
                    <Title>Integrated Skills</Title>
                    <List
                        itemLayout="horizontal"
                        dataSource={nonTechnicalSkillsData}
                        renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={item.avatar}
                                title={item.title}
                                description={item.description}
                            />
                        </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </Parallax>
        {/* <Divider/> */}
        {/* <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.8] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
            className="code-box-shape"
        >
            <Row style={{ paddingTop: "1%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col>
                    <Title>Recent Projects</Title>
                    <Timeline>
                        <Timeline.Item dot={<ClockCircleFilled className="timeline-clock-icon" />} color="crimson">
                            July 2022 - Present: <strong>charlesgoh.io Blog</strong>
                        </Timeline.Item>
                        <Timeline.Item color="crimson">July 2022: <strong>charlesgoh.io Portfolio Page</strong></Timeline.Item>
                    </Timeline>
                </Col>
                <Col style={{ paddingLeft: "5%" }}>
                    <FundProjectionScreenOutlined width={100} style={{ fontSize: '100px', color: 'darkred' }} />
                </Col>
            </Row>
        </Parallax> */}
        <Divider/>
        <Row style={{ padding: "5% 1% 1% 1%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paragraph>For professional or business enquiries, I am contactable via the following methods:</Paragraph>
        </Row>
        <Row style={{ padding: "1% 1% 10% 1%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button type="text" href={"https://www.linkedin.com/in/charlesgoh/"} target="_blank">
                <LinkedinFilled width={100} style={{ fontSize: '60px', color: '#0A66C2' }} />
            </Button>
            <Button type="text" href={"mailto:charlesgohck@charlesgohck.com"} target="_blank">
                <MailFilled width={100} style={{ fontSize: '60px', color: 'darkred' }} />
            </Button>
        </Row>
    </>
}

export default Portfolio
