// NODE

function Node (x, y, radius, color) {
    this.x                  =   x;
    this.y                  =   y;
    this.radius             =   radius || defaultNodeRadius;
    this.color              =   color  || defaultNodeColor;
    this.id                 =   ++nodeIdIncrementer;
    this.siblings           =   [];
    this.selected           =   false;
}

Node.prototype.draw         =   function (override) {
    try {
        if (!this.x || !this.y) { throw "X, Y location not specified. Cannot draw node." }
        else if (nodeIdList.indexOf(this.id) !== -1 && !override) { throw "Node having same id exists. Cannot draw node." }
        else if (doesNodeOverlap(this.x, this.y) && !override) { throw "Node overlaps or touches another node. Cannot draw node." }
        else {
            drawCircle(nodeyContext, this.x, this.y, this.radius, this.color);
            nodeIdList.push(this.id);
            nodeList.push(this);
        }
    } catch (e) {
        if (!nodeyContext) { throwError("No context. Cannot draw node."); }
        else { throwError(e); }
    }
};

Node.prototype.undraw       =   function () {
    try {
        removeCircle(nodeyContext, this.x, this.y, this.radius);
    } catch (e) {
        throwError(e);
    }
};

Node.prototype.selectNode   =   function () {
    try {
        if (this.selected) {
            throw "Node already selected. Cannot select node.";
        } else {
            selectCircle(nodeyContext, this.x, this.y, this.radius);
            this.selected               =   true;
            selectedNodeIdList.push(this.id);
        }
    } catch (e) {
        throwError(e);
    }
};

Node.prototype.unselectNode =   function () {
    try {
        if (!this.selected) {
            throw "Node not selected. Cannot unselect node."
        } else {
            unselectCircle(nodeyContext, this.x, this.y, this.radius);
            this.selected               =   false;
            selectedNodeIdList.splice(selectedNodeIdList.indexOf(this.id), 1);
        }
    } catch (e) {
        throwError(e);
    }
};


// BONE

function Bone (startNode, endNode, color) {
    this.startNode          =   startNode;
    this.endNode            =   endNode;
    this.color              =   color || defaultBoneColor;
}

Bone.prototype.draw         =   function () {
    if (this.startNode.siblings.indexOf(this.endNode.id) === -1) {
        actualStartX            =   this.startNode.x;
        actualEndX              =   this.endNode.x;
        actualStartY            =   this.startNode.y;
        actualEndY              =   this.endNode.y;
        drawLine(nodeyContext, actualStartX, actualStartY, actualEndX, actualEndY, this.color);
        this.startNode.siblings.push(this.endNode.id);
        this.endNode.siblings.push(this.startNode.id);
    } else {
        
    }
};
