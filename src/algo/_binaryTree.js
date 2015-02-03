function BinaryTree () {
  this._tree = Object.create({});
  this._root = void 0;
}

BinaryTree.prototype.getNewHash = function() {
  return Math.floor(new Date.getTime() * Math.random(5));
};

BinaryTree.prototype.addNode = function(value){

};

BinaryTree.prototype.isEmpty = function() {
  if(!this._root)
    return true;
  return false;
};

BinaryTree.prototype.getRootNode = function() {
  return this._root;
};

BinaryTree.prototype.toString = function(){
  
};