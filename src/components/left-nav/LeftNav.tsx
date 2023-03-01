import React from 'react';
import './LeftNav.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { CardHeader } from '@mui/material';

class LeftNav extends React.Component {
    seed: number;
    constructor(props: any) {
        super(props);
        this.seed = Math.floor(Math.random() * 9999);
    }
    override render() {
        return (
            <div className="left-nav bg-lush">
                <Stack className="user-stack" direction="row" spacing={1}>
                    <CardHeader className="user-card"
                        avatar={
                            <Avatar
                                alt="Hazel"
                                src={`https://picsum.photos/200?random=${this.seed}`}
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