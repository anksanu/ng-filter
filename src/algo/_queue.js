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

function Queue() {
  this._queue = Object.create({});
  this._length = 0;
  this._front = void 0;
  this._rear = void 0;
}

Queue.prototype.uniqueHash = function() {
  return Math.floor(new Date().getTime() * Math.random(5));
}

Queue.prototype.peek = function() {
  if (this._front) {
    return this._queue[this._front].get();
  }
  return null;
}

Queue.prototype.push = function(value) {
  var id = this.uniqueHash();
  if (!this._length) {
    var item = new ListItem(value, void 0, void 0);
    this._front = id;
    this._rear = id;
    this._queue[id] = item;
    this._length += 1;
    return true;
  }

  var item = new ListItem(value, void 0, this._rear);
  this._queue[this._rear]._next = id;
  this._rear = id;
  this._queue[id] = item;
  this._length += 1;
  return true;
}

Queue.prototype.pop = function() {
  if (!this._length) {
    return void 0;
  }
  this._length -= 1;
  var tempId = this._front;
  this._front = this._queue[this._front].getNext();
  return this._queue[tempId].get();
}

Queue.prototype.length = function() {
  return this._length;
}

Queue.prototype.size = function() {

}

Queue.prototype.toString = function() {
  var tempId = this._front;
  var arr = [];
  for (var i = 0; i < this._length; i++) {
    if (!tempId)
      continue;
    arr.push(this._queue[tempId].get());
    tempId = this._queue[tempId].getNext();
  }
  return arr.join(',');
}


var q = new Queue();
q.push(5);
q.push(6);
q.push(7);
q.push(8);
console.log(q.toString());
q.pop();
console.log(q.toString());

