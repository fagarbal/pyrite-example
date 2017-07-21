import emit from 'pyrite-server/lib/emit';

export default class Notes {
	constructor() {
		this.notes = [1, 2, 3];
	}

	getNotes() {
		return this.notes;
	}

	@emit
	addNote(note) {
		this.notes.push(note);

		return note;
	}
}