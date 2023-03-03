import React from 'react';
import { LineChartOutlined, ThunderboltOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './LinkList.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../../AppContext';
import { LinkListProps } from './LinkListProps';

type MenuItem = Required<MenuProps>['items'][number];

/**
 * Defines the user card component.
 */
const LinkList: React.FunctionComponent<LinkListProps> = (props: LinkListProps) => {
    const {selectedMenuItem} = useContext(AppContext);
    const {setSelectedMenuItem} = useContext(AppContext);
    const items: MenuItem[] = [
        getItem(<Link onClick={() => setSelectedMenuItem('dashboard')} to="/dashboard">Dashboard</Link>,
                'dashboard', <LineChartOutlined />),
        getItem(<Link onClick={() => setSelectedMenuItem('workflows')} to="/workflows">Workflows</Link>,
                'workflows', <ThunderboltOutlined />),
        getItem(<Link onClick={() => setSelectedMenuItem('chat')} to="/chat">Chat</Link>,
                'chat', <MessageOutlined />),
        getItem(<Link onClick={() => setSelectedMenuItem('settings')} to="/settings">Settings</Link>,
                'settings', <SettingOutlined />)
        ];
        
    /**
     * Renders the user card component.
     * @returns The user card component.
     * @override
     */
    
        
        return (
            <Menu className="link-list"
                mode="vertical"
                items={items}
                defaultSelectedKeys={[selectedMenuItem]}
            />
        );
     function getItem(
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