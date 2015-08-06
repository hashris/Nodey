function bindClickEvent (ctx) {
    $(ctx).on('click', function (event) {
        canvasClick(event);
    });
}

function canvasClick (event) {
    if (!pointIsInsideANode(event.offsetX, event.offsetY)) {
        var newNode =   null;
        newNode     =   new Node(event.offsetX, event.offsetY, defaultNodeRadius, "red");
        newNode.draw();
    }
}