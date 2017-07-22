import { pyrite } from 'pyrite';
import Chat from './components/chat-component';

let host = '"' + process.env.HOST + '"';

if (host === '"undefined"') host = 'localhost';

pyrite
.server(host + ':' + (process.env.PORT || 4000))
.add(Chat, 'Chat')
.run('chat-app');