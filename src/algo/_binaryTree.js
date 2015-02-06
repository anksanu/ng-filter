function BinaryTree() {
  Tree.call(this);
}

BinaryTree.prototype = Tree.prototype;

BinaryTree.prototype.constructor = BinaryTree;

BinaryTree.prototype.addNode = function(value) {
  var newNode = new Node(value, this._root);
  var id = this.getNewHash();
  if (!this._root) {
    this._root = id;
    this._tree[id] = newNode;
    return;
  }

  var parentNodeId = this.addLookUp(this._root, this._tree, value);
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

BinaryTree.prototype.search = function(value) {
  var rootNodeId = this._root;
  var tree = this._tree;
  if (!this._root) {
    return void 0;
  }

  return this.searchLookUp(rootNodeId, tree, value);
};

BinaryTree.prototype.getRootNode = function() {
  return this._root;
};

BinaryTree.prototype.toString = function() {
  return 'Object Binary Tree';
};

var tree = new BinaryTree();
tree.addNode(5);
tree.addNode(4);
tree.addNode(7);
tree.addNode(6);
console.table(tree._tree);
console.log(tree.search(4));