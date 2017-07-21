import { Core } from 'pyrite';
import List from './components/list-component';

Core
.server('localhost:4000')
.add(List, 'List')
.run('list-app');