function bindClickEvent (ctx) {
    $(ctx).on('click', function (event) {
        canvasClick(event);
    });
}

function canvasClick (event) {
    console.debug(isPointInsideANode(event.offsetX, event.offsetY));
}