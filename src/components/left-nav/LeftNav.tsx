import React from 'react';
import './LeftNav.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { CardHeader } from '@mui/material';

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
            <div className="left-nav bg-lush">
                <Stack className="user-stack" direction="row" spacing={1}>
                    <CardHeader className="user-card"
                        avatar={
                            <Avatar
                                alt="Hazel"
                                src={`https://picsum.photos/200?random=${Math.floor(Math.random() * 9999)}`}
                            />
                        }
                        title="Hazel"
                    />
                </Stack>
            </div>
        );
    }
}

export default LeftNav;