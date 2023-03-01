import React from 'react';
import './LeftNav.scss';
import UserCard from './user-card/UserCard';
import LinkList from './link-list/LinkList';

/**
 * Defines the common left navigation component.
 */
class LeftNav extends React.Component {

    /**
     * Renders the left navigation component.
     * @returns The left navigation component.
     * @override
     */
    override render() {
        return (
            <div className="left-nav bg-primary-gradient">
                <UserCard/>
                <LinkList/>
            </div>
        );
    }
}

export default LeftNav;