(function(exports){
    function NoteListController(noteListModel) {
        this.app = document.getElementById('app');
        noteListModel.createNote("Favourite Drink: Kombucha")
        noteListModel.createNote("Its a whole new Note")
        this.view = new NoteListView(noteListModel)
    }
    NoteListController.prototype.updateContent = function(){
        this.app.innerHTML = this.view.listHTML()
    }

    NoteListController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
        window.addEventListener("hashchange", () => this.showNoteForCurrentPage());
    };

    NoteListController.prototype.showNoteForCurrentPage = function() {
        this.showNote(this.getNoteFromUrl(window.location));
    };

    NoteListController.prototype.getNoteFromUrl = function(location) {
        return location.hash.split("#notes/")[1];
    };

    NoteListController.prototype.getContent = function(noteID){

        for (var i = 0; i < this.view.content.content.length; i++) {
            if(noteID == this.view.content.content[i].id){
                return this.view.content.content[i].content
            }else {return "No matches"}
        }
    }

    NoteListController.prototype.showNote = function(noteID) {
        document
            .getElementById("app")
            .innerHTML = this.getContent(noteID);
    };

    exports.NoteListController = NoteListController;
})(this);

let noteList = new NoteList()
let controller = new NoteListController(noteList)
controller.makeUrlChangeShowNoteForCurrentPage()
