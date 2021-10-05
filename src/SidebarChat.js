import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import useSeed from './useSeed';

function SidebarChat() {
    const seed = useSeed();

    return (
        <div className="sidebarChat">
            <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
            <div className="sedebarChat__info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    );
}

export default SidebarChat;
