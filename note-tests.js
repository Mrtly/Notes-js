// note-test.js

text= "blah blah"

function noteIncludesText() {
    var note = new Note();
    assert.isTrue(note.content === text);
  };
  
  noteIncludesText(text);