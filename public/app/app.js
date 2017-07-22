import { pyrite } from 'pyrite';
import Chat from './components/chat-component';

pyrite
.server(( process.env.HOST ? "'"+process.env.HOST+"'" : 'localhost' ) + ':' + (process.env.PORT || 4000))
.add(Chat, 'Chat')
.run('chat-app');