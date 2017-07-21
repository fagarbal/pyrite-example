import { Component, Template, State } from 'pyrite';
import template from './list-template.html';

@Template(template)
@State({
	notes: []
})
export default class List extends Component {
	onLoad() {
		this.rpc.Notes.getNotes()
		.then((notes) => {
			this.state.notes = notes;
		});

		this.rpc.Notes.on.addNote((note) => {
			this.state.notes.push(note);
		});
	}

	addNote() {
		return this.rpc.Notes.addNote(this.state.note);
	}
};