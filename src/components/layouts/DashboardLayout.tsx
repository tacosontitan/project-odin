import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { theme } from 'antd';
import Layout, { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import LeftNav from '../left-nav/LeftNav';
import './DashboardLayout.scss'
import { DashboardLayoutProps } from './DashboardLayoutProps';

const DashboardLayout: React.FunctionComponent<DashboardLayoutProps> = (props: DashboardLayoutProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return <>
        <Layout className="dashboard">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <LeftNav collapsed={collapsed} />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, paddingLeft: 20, background: colorBgContainer }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    </>
}

export default DashboardLayout;
