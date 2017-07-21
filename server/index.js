import pyriteServer from 'pyrite-server';
import Notes from './notes';

pyriteServer
.add(Notes)
.listen(4000);