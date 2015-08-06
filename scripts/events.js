function bindClickEvent (ctx) {
    $(ctx).on('click', function (event) {
        canvasClick(event);
    });
}

function canvasClick (event) {
    if (!pointIsInRangeOfAnyNode(event.offsetX, event.offsetY)) {
        var newNode =   null;
        newNode     =   new Node(event.offsetX, event.offsetY, defaultNodeRadius, defaultNodeColor);
        newNode.draw();
    } else {
        if (doesNodeOverlap(event.offsetX, event.offsetY)) {
            var clickedNode     =   findClickedNode(event.offsetX, event.offsetY);
        }
    }
}