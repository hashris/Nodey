var nodeyCanvas         =   null,
    nodeyContext        =   null,
    canvasHeight        =   300,
    canvasWidth         =   500;

var $nodeyCanvas        =   $('#nodey-canvas');


function init () {
    nodeyCanvas         =   document.getElementById("nodey-canvas");
    nodeyContext        =   nodeyCanvas.getContext("2d");
    setCanvasStyle(nodeyContext, "#F5F5F5");
    bindClickEvent(nodeyCanvas);
}

//Continue at utils, isPointInsideANode