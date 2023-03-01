import React from 'react';
import './UserCard.scss';
import { Avatar, Space } from 'antd';

/**
 * Defines the user card component.
 */
class UserCard extends React.Component {
    /**
     * Renders the user card component.
     * @returns The user card component.
     * @override
     */
    override render() {
        return (
            <Space className="user-card" wrap size={16}>
                <Avatar size="large" src={`https://picsum.photos/200?random=${Math.floor(Math.random() * 9999)}`}>
                    H
                </Avatar>
                <h4>Hazel</h4>
            </Space>
        );
    }
}

export default UserCard;