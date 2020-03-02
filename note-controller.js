(function(exports){
    function NoteListController(noteListModel) {
        this.app = document.getElementById('app');
        noteList.createNote("Favourite drink: kombucha")
        this.view = new NoteListView(noteListModel)
    }
    NoteListController.prototype.updateContent = function(){
        this.app.innerHTML = this.view.listHTML()
    }
    exports.NoteListController = NoteListController;
})(this);

var noteList = new NoteList();
var noteListController = new NoteListController(noteList);
noteListController.updateContent();
