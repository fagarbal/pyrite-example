import { pyrite } from 'pyrite';
import Chat from './components/chat-component';

pyrite
.server('localhost:' + (process.env.PORT || 4000))
.add(Chat, 'Chat')
.run('chat-app');