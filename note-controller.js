(function(exports){
    function NoteListController(noteListModel) {
        this.app = document.getElementById('app');
        noteListModel.createNote("Favourite Drink: Kombucha")
        this.view = new NoteListView(noteListModel)
    }
    NoteListController.prototype.updateContent = function(){
        this.app.innerHTML = this.view.listHTML()
    }
    exports.NoteListController = NoteListController;
})(this);

