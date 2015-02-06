function Tree() {
  this._tree = Object.create({});
  this._root = void 0;
}

Tree.prototype.addLookUp = function(nodeId, tree, value) {
  var node = tree[nodeId];
  var nodeValue = node.get();
  var nodeLeft = node.children().left;
  var nodeRight = node.children().right;
  if (nodeValue >= value) {
    return nodeLeft != undefined ? this.addLookUp(nodeLeft, tree, value) : nodeId;
  } else {
    return nodeRight != undefined ? this.addLookUp(nodeRight, tree, value) : nodeId;
  }
}

Tree.prototype.searchLookUp = function(nodeId, tree, value) {
  var node = tree[nodeId];
  var nodeValue = node.get();
  var nodeLeft = node.children().left;
  var nodeRight = node.children().right;
  if (nodeValue > value) {
    return nodeLeft != undefined ? this.searchLookUp(nodeLeft, tree, value) : void 0;
  } else if (nodeValue < value) {
    return nodeRight != undefined ? this.searchLookUp(nodeRight, tree, value) : void 0;
  } else {
    return node;
  }
}

Tree.prototype.getNewHash = function() {
  return Math.floor(new Date().getTime() * Math.random(5));
};

Tree.prototype.isEmpty = function() {
  if (!this._root)
    return true;
  return false;
};