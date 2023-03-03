import React from 'react';
import './LeftNav.scss';
import UserCard from './user-card/UserCard';
import LinkList from './link-list/LinkList';
import { LeftNavProps } from './LeftNavProps';

/**
 * Defines the common left navigation component.
 */
const LeftNav: React.FunctionComponent<LeftNavProps> = (props: LeftNavProps) => {
    return <>
        <div className="left-nav bg-primary-gradient">
            <UserCard collapsed={props.collapsed} />
            <LinkList> </LinkList>
        </div>
    </>
}

export default LeftNav;