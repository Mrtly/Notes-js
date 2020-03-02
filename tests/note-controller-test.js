function pageUpdatesContent(){
    console.log("pageUpdatesContent")
    var appText = document.getElementById('app').textContent;
    var noteList = new NoteList();
    var noteListController = new NoteListController(noteList);
    // noteListController.updateContent();
    assert.isTrue(appText === "Favourite drink: kombucha")
}
pageUpdatesContent();