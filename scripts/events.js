var mode    =   "add";                      // add, connect.

function bindClickEvent (ctx) {
    $(ctx).on('click', function (event) {
        if (mode === "add") {
            canvasClick(event);
        } else if (mode === "connect") {
            canvasConnect(event);
        } else if (mode === "muscle"){
            connectMuscle(event);
        } else {
            throwError("Mode not defined. Click event does nothing.");
        }
    });
}

function canvasClick (event) {
    if (!pointIsInRangeOfAnyNode(event.offsetX, event.offsetY)) {
        // Draw node if clicked point is not in range of any other node.
        var newNode             =   null;
        newNode                 =   new Node(event.offsetX, event.offsetY, defaultNodeRadius, defaultNodeColor);
        newNode.draw();
    }
}

function canvasConnect (event) {
    // Select or unselect node if point is inside another node
    if (doesNodeOverlap(event.offsetX, event.offsetY)) {
        var clickedNode     =   findClickedNode(event.offsetX, event.offsetY);
        if (clickedNode.selected) {
            clickedNode.unselectNode();
        } else {
            if (selectedNodeIdList.length == 0) {
                clickedNode.selectNode();
            } else if (selectedNodeIdList.length === 1) {
                var prevNode    =   nodeHavingId(selectedNodeIdList[0]);
                var bone        =   new Bone(prevNode, clickedNode);
                prevNode.unselectNode();
                bone.draw();
            }
        }
    } else {
        throwWarning("Clicked outside node range. Doing nothing.");
    }
}

function connectMuscle(event){
        // Select or unselect node if point is inside another node
    if (doesNodeOverlap(event.offsetX, event.offsetY)) {
        var clickedNode     =   findClickedNode(event.offsetX, event.offsetY);
        if (clickedNode.selected) {
            clickedNode.unselectNode();
        } else {
            if (selectedNodeIdList.length == 0) {
                clickedNode.selectNode();
            } else if (selectedNodeIdList.length === 1) {
                var prevNode    =   nodeHavingId(selectedNodeIdList[0]);
                var muscle        =   new Muscle(prevNode, clickedNode);
                prevNode.unselectNode();
                muscle.draw();
            }
        }
    } else {
        throwWarning("Clicked outside node range. Doing nothing.");
    }
}


// Mode button
function initModeButton (button) {
    $(button).on('click', function (event) {
        if (mode === "add") {
            mode    =   "connect";
            button.firstChild.data      =   "Connect Mode";
        } else if (mode === "connect") {
            mode    =   "muscle";
            button.firstChild.data      =   "Muscle Mode";
        } else if (mode === "muscle") {
            mode    =   "add";
            button.firstChild.data      =   "Draw Mode";
        }
    });
}