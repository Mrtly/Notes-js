function noteListViewContainsNoteList(){
    console.log("noteListViewContainsNoteList")
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList)
    noteList.createNote("test 1")
    noteList.createNote("test 2")

    assert.isTrue(noteListView.content.content[0].content === "test 1");
}

noteListViewContainsNoteList();

function noteListViewCreatesHTMLList(){
    console.log("noteListViewCreatesHTMLList")
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList)
    noteList.createNote("test 1")
    noteList.createNote("test 2")
   
    assert.isTrue(noteListView.listHTML() === "<ul><li><div>test 1</div></li></ul><ul><li><div>test 2</div></li></ul>");

}
noteListViewCreatesHTMLList();