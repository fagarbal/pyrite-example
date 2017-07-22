import pyriteServer from 'pyrite-server';
import Notes from './notes';

pyriteServer
.add(Notes)
.listen(process.env.PORT || 4000, process.env.STATIC_FOLDER  ? __dirname + process.env.STATIC_FOLDER : '');