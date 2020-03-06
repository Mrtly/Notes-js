(function (exports) {
    function SingleNoteView(noteModel) {
        this.content = noteModel
    }

    SingleNoteView.prototype.singleNoteHTML = function () {
        return ("<div>" + this.content.content + "</div>")
    };

    exports.SingleNoteView = SingleNoteView;
})(this);

