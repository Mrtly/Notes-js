(function (exports) {
    function NoteList() {
        this.count = 0;
        this.content = [];
    }

    NoteList.prototype.add = function (note) {
        note.id = this.count;
        this.count++;
        this.content.push(note)
    };
    NoteList.prototype.createNote = function (text) {
        this.add(new Note(text))
    };
    exports.NoteList = NoteList;
})(this);


