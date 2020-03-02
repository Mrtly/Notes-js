(function(exports) {
    function NoteListView(noteList) {
      this.content = noteList;
    };

    NoteListView.prototype.listHTML = function(){            
        var newarr = []
        for (var i = 0; i < this.content.content.length; i++){
            newarr.push("<ul><li><div>" +this.content.content[i].content+"</div></li></ul>")
        }
        return newarr.join('')
    }
  
    exports.NoteListView = NoteListView;
  })(this);