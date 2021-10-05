import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios.js';

function App() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        axios.get('/api/messages/sync').then((response) => {
            setMessages(response.data);
        });
    }, []);

    useEffect(() => {
        var pusher = new Pusher('1ef8341e29de91db578b', {
            cluster: 'us2',
        });

        var channel = pusher.subscribe('messages');
        channel.bind('inserted', function (newMessage) {
            setMessages((prev) => [...prev, newMessage]);
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, []);

    return (
        <div className="app">
            <div className="app__body">
                <Sidebar />
                <Chat messages={messages} />
            </div>
        </div>
    );
}

export default App;
