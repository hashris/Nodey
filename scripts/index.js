var nodeyCanvas         =   null,
    nodeyContext        =   null,
    canvasHeight        =   300,
    canvasWidth         =   500;

var $nodeyCanvas        =   $('#nodey-canvas');


$(document).ready(function () {
    init();
});

function init () {
    nodeyCanvas         =   document.getElementById("nodey-canvas");
    nodeyContext        =   nodeyCanvas.getContext("2d");
    modeButton          =   document.getElementById("mode-button");
    setCanvasStyle(nodeyContext, defaultCanvasColor);       // utils.js
    bindClickEvent(nodeyCanvas);                            // events.js
    initModeButton(modeButton);                             // events.js
}