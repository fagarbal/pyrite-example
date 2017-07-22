import { Component, Template, State, sanitize } from 'pyrite';
import template from './chat-template.html';

@Template(template, {
	note: (controller, note) => sanitize`
		<p>${note.nick}</p>
		<div class="alert alert-${controller.state.nick === note.nick ? 'warning' : 'info'}" role="alert">
		  <p style="word-break: break-all;">${note.msg}</p>
		</div>
	`
})
@State({
	notes: []
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

			if (this.state.notes.length > 20)
				this.state.notes.shift();

			this.refs.chat.scrollTop = this.refs.chat.scrollHeight;
		});
	}

	onKeyPress(event) {
		if (event.keyCode === 13) {
			this.addNote();
		}
	}

	addNote() {		
		this.rpc.Notes.addNote({
			msg: this.state.note,
			nick: this.state.nick
		});

		this.state.note = '';
	}
};