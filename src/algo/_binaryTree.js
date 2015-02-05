function BinaryTree() {
  this._tree = Object.create({});
  this._root = void 0;
}

BinaryTree.prototype.getNewHash = function() {
  return Math.floor(new Date().getTime() * Math.random(5));
};

BinaryTree.prototype.addNode = function(value) {
  var newNode = new Node(value, this._root);
  var id = this.getNewHash();
  if (!this._root) {
    this._root = id;
    this._tree[id] = newNode;
    return;
  }


  function lookUp(nodeId, tree, value) {
    var node = tree[nodeId];
    var nodeValue = node.get();
    var nodeLeft = node.children().left;
    var nodeRight = node.children().right;
    if (nodeValue >= value) {
      return nodeLeft != undefined ? lookUp(nodeLeft,tree,value) : nodeId;
    } else {
      return nodeRight != undefined ? lookUp(nodeRight,tree,value) : nodeId;
    }
  }

  var parentNodeId = lookUp(this._root, this._tree, value);
  var parentNode = this._tree[parentNodeId];
  var parentNodeValue = parentNode.get();
  newNode.setParent(parentNodeId);
  if (parentNodeValue >= value) {
    parentNode.setLeftChild(id);
  } else {
    parentNode.setRightChild(id);
  }
  this._tree[id] = newNode;
};

BinaryTree.prototype.isEmpty = function() {
  if (!this._root)
    return true;
  return false;
};

BinaryTree.prototype.getRootNode = function() {
  return this._root;
};

BinaryTree.prototype.toString = function() {

};

var tree = new BinaryTree();
tree.addNode(5);
tree.addNode(4);
tree.addNode(7);
tree.addNode(6);
console.table(tree._tree);
