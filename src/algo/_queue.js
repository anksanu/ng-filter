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
  return void 0;
}

Queue.prototype.push = function(value) {
  var id = this.uniqueHash();
  var item = new ListItem(value, void 0, void 0);
  if (!this._length) {
    this._front = id;
    this._rear = id;
    this._queue[id] = item;
    this._length += 1;
    return this;
  }

  item.setPrev(this._rear);
  this._queue[this._rear].setNext(id);
  this._rear = id;
  this._queue[id] = item;
  this._length += 1;
  return this;
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
