// Tree Node constructor
function Node (value, parent, leftChild, rightChild) {
  this._value = value || void 0;
  this._parent = parent || void 0;
  this._leftChild = leftChild || void 0;
  this._rightChild = rightChild || void 0;
}



// returns the value of the node
Node.prototype.get = function() {
  return this._value;
};



// returns the parent of the node
Node.prototype.parent = function() {
  return this._parent;
};



// set the parent of the node
Node.prototype.setParent = function(parent) {
  this._parent = parent;
};



//set the left child of the node
Node.prototype.setLeftChild = function(leftChild){
  this._leftChild = leftChild;
};



//set the right child of the node
Node.prototype.setRightChild = function(rightChild){
  this._rightChild = rightChild;
};



// retuns the children of the node { left : '' , right : ''}
Node.prototype.children = function() {
   return {
     left : this._leftChild,
     right : this._rightChild
   };
};


// returns if the node is leaf or not
Node.prototype.isLeaf = function() {
  if(!this._leftChild && !this._rightChild)
    return true;
  return false;
};