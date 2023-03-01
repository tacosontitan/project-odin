import React from 'react';
import './UserCard.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { CardHeader } from '@mui/material';

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
        );
    }
}

export default UserCard;