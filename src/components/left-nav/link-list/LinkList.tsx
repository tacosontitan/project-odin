import React from 'react';
import Avatar from '@mui/material/Avatar';
import { CardHeader, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { LeftNavLink } from './LeftNavLink';

/**
 * Defines the user card component.
 */
class LinkList extends React.Component {
    links: LeftNavLink[];
    constructor() {
        let props = {};
        super(props);

        let picsum = "https://picsum.photos/200?random="
        this.links = [
            new LeftNavLink('Dashboard', picsum + Math.floor(Math.random() * 9999), 'dashboard'),
            new LeftNavLink('Workflows', picsum + Math.floor(Math.random() * 9999), 'workflows'),
            new LeftNavLink('Chat', picsum + Math.floor(Math.random() * 9999), 'chat'),
        ];
    }
    /**
     * Renders the user card component.
     * @returns The user card component.
     * @override
     */
    override render() {
        return (
            <List component="nav" aria-label="application links">
                {this.links.map((link, index) => (
                    <ListItem key={index} button>
                        <ListItemText primary={link.name} />
                    </ListItem>
                ))}
            </List>
        );
    }
}

export default LinkList;