import { Component, Template, State } from 'pyrite';
import template from './chat-template.html';

@Template(template)
@State({
	notes: [],
	note: '',
	nick: ''
})
export default class Chat extends Component {
	onLoad() {
		this.rpc.Notes.getNotes()
		.then((notes) => {
			this.state.notes = notes;
			this.refs.chat.scrollTop = this.refs.chat.scrollHeight;
		});

		this.rpc.Notes.on.addNote((note) => {
			this.state.notes.push(note);
			this.state.notes = this.state.notes.slice(0, 20);
			this.refs.chat.scrollTop = this.refs.chat.scrollHeight;
		});
	}

	addNote() {		
		this.rpc.Notes.addNote({
			msg: this.state.note,
			nick: this.state.nick
		});
	}
};