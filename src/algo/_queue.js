function ListItem(value, next, prev) {
  this._value = value || void 0;
  this._next = next || void 0;
  this._prev = prev || void 0;
}

ListItem.prototype.get = function() {
  return this._value;
}

ListItem.prototype.getNext = function() {
  return this._next;
}

ListItem.prototype.getPrev = function() {
  return this._prev;
}

function Queue() {
  var _queue = Object.create({});
}

Queue.prototype.push = function() {

}

Queue.prototype.pop = function() {

}

Queue.prototype.length = function() {

}

Queue.prototype.size = function() {

}

Queue.prototype.toString = function() {

}
