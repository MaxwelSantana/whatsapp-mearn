import { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';

function App() {
    useEffect(() => {
        var pusher = new Pusher('1ef8341e29de91db578b', {
            cluster: 'us2',
        });

        var channel = pusher.subscribe('messages');
        channel.bind('inserted', function (data) {
            alert(JSON.stringify(data));
        });
    }, []);

    return (
        <div className="app">
            <div className="app__body">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
}

export default App;
