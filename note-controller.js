(function (exports) {
    function NoteListController(noteListModel) {
        this.app = document.getElementById('app');
        this.noteList = noteListModel;
        this.view = new NoteListView(noteListModel)
    }

    NoteListController.prototype.addNote = function (text) {
        this.noteList.createNote(text)
    };


    NoteListController.prototype.updateContent = function () {
        this.app.innerHTML = this.view.listHTML()
    };

    NoteListController.prototype.makeUrlChangeShowNoteForCurrentPage = function () {
        window.addEventListener("hashchange", (event) => {
            if (event.newURL.split('#')[1]) {
                this.showNoteForCurrentPage()
            }

        });
    };

    NoteListController.prototype.showNoteForCurrentPage = function () {
        this.showNote(this.getNoteFromUrl(window.location));
    };

    NoteListController.prototype.getNoteFromUrl = function (location) {
        return location.hash.split("#notes/")[1];
    };

    NoteListController.prototype.getContent = function (noteID) {

        for (var i = 0; i < this.view.content.content.length; i++) {
            console.log(this.view.content.content[i].id);
            if (noteID == this.view.content.content[i].id) {
                return this.view.content.content[i].content
            }
        }
    };

    NoteListController.prototype.showNote = function (noteID) {
        document
            .getElementById("app")
            .innerHTML = `<ul><li><div>${this.getContent(noteID)}</div></li></ul>`;
    };
    NoteListController.prototype.createNote = function (text) {
        this.view.content.createNote(text)
    };
    NoteListController.prototype.listenForSubmit = function () {
        let form = document.getElementById("new_note");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.addNote(event.target.elements[0].value);
            this.updateContent();
            document.getElementById("new_note").reset();

        });
    };
    NoteListController.prototype.backToNotes = function () {
        location.hash = '#';
        this.updateContent();
    };

    exports.NoteListController = NoteListController;
})(this);

let noteList = new NoteList();
let controller = new NoteListController(noteList);
controller.updateContent();
controller.listenForSubmit();
controller.makeUrlChangeShowNoteForCurrentPage();

