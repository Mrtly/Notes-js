(function (exports) {
    function SingleNoteView(noteModel) {
        this.content = noteModel
    }

    SingleNoteView.prototype.singleNoteHTML = function () {
        return ("<ul><li><div>" + this.content.content + "</div></li></ul>")
    };

    exports.SingleNoteView = SingleNoteView;
})(this);

