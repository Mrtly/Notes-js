(function (exports) {
    function NoteListView(noteList) {
        this.content = noteList;
    }
    NoteListView.prototype.listHTML = function () {
        var newarr = [];
        for (var i = 0; i < this.content.content.length; i++) {
            var noteID = this.content.content[i].id
            if(this.content.content[i].content.length > 20) {
                newarr.push(`<ul><li><div><a href=#notes/${noteID}>${this.content.content[i].content.substring(0, 20)}...</a></div></li></ul>`)
            }
            else {
                newarr.push(`<ul><li><div><a href=#notes/${noteID}>${this.content.content[i].content}</a></div></li></ul>`)
                }
        }
        return newarr.join('')
    };


    exports.NoteListView = NoteListView;
})(this);

