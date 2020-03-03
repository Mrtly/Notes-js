(function (exports) {
    function NoteList() {
        this.content = [];
    }
    NoteList.prototype.add = function (note) {
        this.content.push(note)
    };
    NoteList.prototype.createNote = function (text) {
        this.add(new Note(text))
    };
    exports.NoteList = NoteList;
})(this);
