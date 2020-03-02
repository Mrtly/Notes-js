// note-test.js

james= "blah blah";
richard="blah blah blah blah";

function noteIncludesText(contentText) {
    var note = new Note(contentText);
    assert.isTrue(note.content === contentText);
    console.log("Your note content is: " + note.content);
  };
  
  noteIncludesText(richard);