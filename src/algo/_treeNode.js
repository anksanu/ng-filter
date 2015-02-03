function Node (value, parent, leftChild, rightChild) {
  this._value = value || void 0;
  this._parent = parent || void 0;
  this._leftChild = leftChild || void 0;
  this._rightChild = rightChild || void 0;
}

Node.prototype.get = function() {
  return this._value;
};

Node.prototype.parent = function() {
  return this._parent;
};

Node.prototype.setParent = function(parent) {
  this._parent = parent;
};

Node.prototype.setLeftChild = function(leftChild){
  this._leftChild = leftChild;
};

Node.prototype.setRightChild = function(rightChild){
  this._rightChild = rightChild;
};

Node.prototype.children = function() {
   return {
     left : this._leftChild,
     right : this._rightChild
   };
};

Node.prototype.isLeaf = function() {
  if(!this._leftChild && !this._rightChild)
    return true;
  return false;
};