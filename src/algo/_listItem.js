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

ListItem.prototype.setNext = function(next) {
  this._next = next;
  return this;
}

ListItem.prototype.getPrev = function() {
  return this._prev;
}

ListItem.prototype.setPrev = function(prev) {
  this._prev = prev;
  return this;
}
