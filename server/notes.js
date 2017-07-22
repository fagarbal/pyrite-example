import emit from 'pyrite-server/lib/emit';

export default class Notes {
	constructor() {
		this.notes = [{
			nick: 'Example',
			msg: 'Example message'
		}];
	}

	getNotes() {
		return this.notes.slice(0, 20);
	}

	@emit
	addNote(note) {
		this.notes.push(note);

		return note;
	}
}