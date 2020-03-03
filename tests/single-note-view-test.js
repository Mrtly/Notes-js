function singleNoteListViewDisplaysHTML() {
    console.log("singleNoteListViewDisplaysHTML");
    var note = new Note("Hello People");
    var singleNoteView = new SingleNoteView(note);
    assert.isTrue(singleNoteView.singleNoteHTML() === '<div>Hello People</div>')
}

singleNoteListViewDisplaysHTML();
