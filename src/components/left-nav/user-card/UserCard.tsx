import React, { useState } from 'react';
import './UserCard.scss';
import { Avatar, Space } from 'antd';
import { UserCardProps } from './UserCardProps';

/**
 * Defines the user card component.
 */
const UserCard: React.FunctionComponent<UserCardProps> = (props: UserCardProps) => {
    return <>
        <Space className={props.collapsed ? "user-card collapsed" : "user-card"} wrap size={16}>
            <Avatar size="large" src="https://avatars.githubusercontent.com/u/65432314?v=4">
                H
            </Avatar>
            {props.collapsed ? null : <h4>Hazel</h4>}
        </Space>
    </>
}

export default UserCard;