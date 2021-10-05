import { Avatar, IconButton } from '@material-ui/core';
import {
    AttachFile,
    InsertEmoticon,
    Mic,
    MoreVert,
    SearchOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import './Chat.css';
import axios from './axios';
import useSeed from './useSeed';

function Chat({ messages }) {
    const seed = useSeed();
    const [input, setInput] = useState('');
    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/api/messages/new', {
            message: input,
            name: 'DEMO APP',
            timestamp: 'Just Now',
            received: false,
        });

        setInput('');
    };
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(({ name, message, timestamp, received }) => (
                    <p
                        className={`chat__message ${
                            received && 'chat__receiver'
                        }`}
                    >
                        <span className="chat__name">{name}</span>
                        {message}
                        <span className="chat__timestamp">{timestamp}</span>
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form onSubmit={sendMessage}>
                    <input
                        type="text"
                        placeholder="Type a message"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit">Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    );
}

export default Chat;
