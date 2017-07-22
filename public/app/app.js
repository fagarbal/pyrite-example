import { pyrite } from 'pyrite';
import Chat from './components/chat-component';

let host = process.env.HOST ? process.env.HOST : 'localhost:4000';

pyrite
.server(host)
.add(Chat, 'Chat')
.run('chat-app');