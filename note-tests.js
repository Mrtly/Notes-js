// note-test.js

james= "blah blah";
richard="blah blah blah blah";

function noteIncludesText(contentText) {
    console.log("noteIncludesText")
    var note = new Note(contentText);
    assert.isTrue(note.content === contentText);
  };
  
  noteIncludesText(richard);