//note-list-test

function noteListIsAnEmptyArray() {
    console.log("noteListIsAnEmptyArray");
    var noteList = new NoteList();
    assert.isTrue(noteList.content.length === 0);
}

noteListIsAnEmptyArray();

function noteListCanAddNote() {
    console.log("noteListCanAddNote");
    var noteList = new NoteList();
    var note = new Note("Test Text");
    noteList.add(note);
    assert.isTrue(noteList.content.length === 1);
    assert.isTrue(noteList.content[0].content === "Test Text")
}

noteListCanAddNote();

function noteListCanCreateAndStoreNote() {
    console.log("noteListCanCreateAndStoreNote");
    var noteList = new NoteList();
    noteList.createNote("Test Text");
    assert.isTrue(noteList.content.length === 1);
    assert.isTrue(noteList.content[0].content === "Test Text")
}

noteListCanCreateAndStoreNote();

function noteListAssignsIDs() {
    console.log("noteListAssignsIDs");
    var noteList = new NoteList();
    noteList.createNote("Test Text");
    noteList.createNote("Second Text");
    noteList.createNote("Third Text");
    assert.isTrue(noteList.content.length === 3);
    assert.isTrue(noteList.content[2].id === 2)
}

noteListAssignsIDs();