import React from 'react';
import { LineChartOutlined, ThunderboltOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './LinkList.scss';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

/**
 * Defines the user card component.
 */
class LinkList extends React.Component {
    items: MenuItem[];
    constructor() {
        super({});
        this.items = [
            this.getItem(<Link to="/dashboard">Dashboard</Link>, 'dashboard', <LineChartOutlined />),
            this.getItem(<Link to="/workflows">Workflows</Link>, 'workflows', <ThunderboltOutlined />),
            this.getItem(<Link to="/chat">Chat</Link>, 'chat', <MessageOutlined />),
            this.getItem(<Link to="/settings">Settings</Link>, 'settings', <SettingOutlined />)
        ];
    }
    /**
     * Renders the user card component.
     * @returns The user card component.
     * @override
     */
    override render() {
        return (
            <Menu className="link-list"
                mode="vertical"
                items={this.items}
            />
        );
    }
    private getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }
}

export default LinkList;