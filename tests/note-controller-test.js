function canMakeANoteController() {
    console.log("canMakeANoteController");
    var noteList = new NoteList();
    var noteListController = new NoteListController(noteList);
    assert.isTrue(noteListController.view.content.content[0].content === "Favourite Drink: Kombucha")
}

canMakeANoteController();


function showsHTMLwith20charLimit() {
    console.log("showsHTML");
    var noteList = new NoteList();
    var noteListController = new NoteListController(noteList);
    noteListController.updateContent();
    assert.isTrue(noteListController.app.innerHTML === "<ul><li><div>Favourite Drink: Kom...</div></li></ul>")
}

showsHTMLwith20charLimit();

