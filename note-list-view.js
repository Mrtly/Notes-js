(function (exports) {
    function NoteListView(noteList) {
        this.content = noteList;
    }
    NoteListView.prototype.listHTML = function () {
        var newarr = [];
        for (var i = 0; i < this.content.content.length; i++) {
            if(this.content.content[i].content.length > 20) {
                newarr.push("<ul><li><div>" + this.content.content[i].content.substring(0, 20) +"..." + "</div></li></ul>")
            }
            else {
                newarr.push("<ul><li><div>" + this.content.content[i].content + "</div></li></ul>")
                }
        }
        return newarr.join('')
    };


    exports.NoteListView = NoteListView;
})(this);

// var noteList2 = new NoteList()
// noteList2.createNote("I went to the shops with ben last week and had a really fun adventure")
// var noteListView2 = new NoteListView(noteList2)
// console.log(noteListView2.listHTML())

