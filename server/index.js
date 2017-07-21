import pyriteServer from '../../pyritejs-backend/';
import Notes from './notes';

pyriteServer
.add(Notes)
.listen(4000);