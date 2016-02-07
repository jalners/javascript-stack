(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Stack = factory();
  }
}(this, function () {
  var Stack = function() {
    this._size = 0;
    this._storage = {};
  };

  Stack.prototype.size = function() {
    return this._size;
  };

  Stack.prototype.push = function(data) {
    this._storage[this._size] = data;
    this._size++;
  };

  Stack.prototype.pop = function() {
    var deletedData;

    if (this._size) {
      this._size--;
      deletedData = this._storage[this._size];
      delete this._storage[this._size];

      return deletedData;
    }
  };

  return Stack;
}));