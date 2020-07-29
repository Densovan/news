import React, { useState } from 'react'
import Navbar from '../Layouts/Navbar'
import SubNavbar from '../Layouts/Subnavbar'
import { Layout, Menu, Breadcrumb, Calendar, Card, List, Badge, Select, Radio, Col, Row, Typography } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const HomeJobs = () => {
    const onPanelChange = (value, mode) => {
        console.log(value, mode)
    }
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    return (
        <React.Fragment>
            <Navbar />
            <SubNavbar />
            <Layout className="container-home-job">
                <Content style={{ padding: " 0 50px" }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>

                    <Layout style={{ padding: '24px 0', backgroundColor: "white" }}>
                        <Sider className="site-layout-background" width={300}>

                            <div className="site-card-border-less-wrapper">
                                <Card title="Job Category" style={{ width: 300 }}>
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={data}
                                        renderItem={item => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    title={<h4 style={{ color: "rgba(0, 0, 0, 0.5)" }}>{item.title}</h4>}
                                                />
                                                <div><Badge count={40} className="site-badge-count-4" /></div>
                                            </List.Item>
                                        )}
                                    />
                                </Card>
                            </div>

                            <div className="site-calendar-demo-card">
                                {/* <Card className="Card-jobs" style={{ width: 300 }}> */}
                                {/* <Calendar fullscreen={false} onPanelChange={onPanelChange} /> */}
                                <div className="site-calendar-customize-header-wrapper " style={{ border: "1px solid rgba(4, 47, 130, 0.3)" }}>
                                    <Calendar
                                        fullscreen={false}
                                        headerRender={({ value, type, onChange, onTypeChange }) => {
                                            const start = 0;
                                            const end = 12;
                                            const monthOptions = [];

                                            const current = value.clone();
                                            const localeData = value.localeData();
                                            const months = [];
                                            for (let i = 0; i < 12; i++) {
                                                current.month(i);
                                                months.push(localeData.monthsShort(current));
                                            }

                                            for (let index = start; index < end; index++) {
                                                monthOptions.push(
                                                    <Select.Option className="month-item" key={`${index}`}>
                                                        {months[index]}
                                                    </Select.Option>,
                                                );
                                            }
                                            const month = value.month();

                                            const year = value.year();
                                            const options = [];
                                            for (let i = year - 10; i < year + 10; i += 1) {
                                                options.push(
                                                    <Select.Option key={i} value={i} className="year-item">
                                                        {i}
                                                    </Select.Option>,
                                                );
                                            }
                                            return (
                                                <div style={{ padding: 8 }}>
                                                    <Typography.Title level={4}>
                                                        Custom header
                                                    </Typography.Title>
                                                    <Row gutter={8}>
                                                        <Col>
                                                            <Radio.Group size="small" onChange={e => onTypeChange(e.target.value)} value={type}>
                                                                <Radio.Button value="month">Month</Radio.Button>
                                                                <Radio.Button value="year">Year</Radio.Button>
                                                            </Radio.Group>
                                                        </Col>
                                                        <Col>
                                                            <Select
                                                                size="small"
                                                                dropdownMatchSelectWidth={false}
                                                                className="my-year-select"
                                                                onChange={newYear => {
                                                                    const now = value.clone().year(newYear);
                                                                    onChange(now);
                                                                }}
                                                                value={String(year)}
                                                            >
                                                                {options}
                                                            </Select>
                                                        </Col>
                                                        <Col>
                                                            <Select
                                                                size="small"
                                                                dropdownMatchSelectWidth={false}
                                                                value={String(month)}
                                                                onChange={selectedMonth => {
                                                                    const newValue = value.clone();
                                                                    newValue.month(parseInt(selectedMonth, 10));
                                                                    onChange(newValue);
                                                                }}
                                                            >
                                                                {monthOptions}
                                                            </Select>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            );
                                        }}
                                        onPanelChange={onPanelChange}
                                    />
                                </div>
                                {/* </Card> */}
                            </div>

                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
                    </Layout>
                </Content>
            </Layout>
        </React.Fragment>
    )
}

export default HomeJobs
