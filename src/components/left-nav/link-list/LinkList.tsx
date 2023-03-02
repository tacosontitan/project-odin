import React from 'react';
import { LineChartOutlined, ThunderboltOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './LinkList.scss';

type MenuItem = Required<MenuProps>['items'][number];

/**
 * Defines the user card component.
 */
class LinkList extends React.Component {
    items: MenuItem[];
    constructor() {
        super({});
        this.items = [
            this.getItem('Dashboard', 'dashboard', <LineChartOutlined />),
            this.getItem('Workflows', 'workflows', <ThunderboltOutlined />),
            this.getItem('Chat', 'chat', <MessageOutlined />),
            this.getItem('Settings', 'settings', <SettingOutlined />)
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