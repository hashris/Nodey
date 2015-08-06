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
        // Two circles intersect if, and only if, the distance between their centers is between the sum and the difference of their radii.
        distBetwCens        =   (node.x - nodeList[i].x)^2 + (node.y - nodeList[i].y)^2;
        if (distBetwCens <= 2*defaultNodeRadius) {
            overlaps        =   true;
        }
    }
    return overlaps;
}

function isPointInsideANode (x, y) {
    var isInside            =   false;
    for (var i = 0; i < nodeList.length; ++i) {
        distBetwPandC       =   Math.sqrt( (x - nodeList[i].x)^2 + (y - nodeList[i].y)^2 );
        if (distBetwPandC < defaultNodeRadius) {
            isInside        =   true;
        }
    }
    return isInside;
}