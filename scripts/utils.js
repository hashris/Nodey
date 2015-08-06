// General Consts
var twoPi                   =   (2 * Math.PI),
    nodeIdIncrementer       =   -1;

// Canvas default consts
var defaultNodeColor        =   "red",
    defaultNodeRadius       =   10;

// Element lists
var nodeIdList              =   [],
    nodeList                =   [];



// Util fns
function setCanvasStyle (ctx, bgColor) {
    $('#nodey-canvas').css('background-color', bgColor);
}

function throwError (errorString) {
    console.error(errorString);
}

function generateUid (separator) {
    var delim       =   separator || "-";
    function S4 () {
        return ( ( ( 1 + Math.random() ) * 0x10000 ) | 0 ).toString(16).substring(1);
    }
    return (S4() + S4() + delim + S4() + delim + S4() + delim + S4() + delim + S4() + S4() + S4());
};


//Canvas fns
function drawCircle (ctx, x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, twoPi);
    ctx.fillStyle  =   color;
    ctx.fill();
}

function doesNodeOverlap (node) {
    var overlaps            =   false;
    for (var i = 0; i < nodeList.length; ++i) {
        var distBetwCens    =   0;
       if ( (Math.abs(node.x - nodeList[i].x) <= defaultNodeRadius) && (Math.abs(node.y - nodeList[i].y) <= defaultNodeRadius) ) {
            overlaps        =   true;
       }
    }
    return overlaps;
}

function pointIsInsideANode (x, y) {
    var isInside            =   false;
    for (var i = 0; i < nodeList.length; ++i) {
        if ( ( Math.abs(x - nodeList[i].x) <= defaultNodeRadius*2 ) && ( Math.abs(y - nodeList[i].y) <= defaultNodeRadius*2 ) ) {
            isInside    =   true;
        }
    }
    console.debug(isInside);
    return isInside;
}