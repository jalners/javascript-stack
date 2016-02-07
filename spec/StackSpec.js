var Stack = require('../src/Stack');

describe('Data Structures in JavaScript: Stack', function() {
  var stack;

  beforeEach(function() {
    stack = new Stack();
  });

  it('should be defined stack structure', function() {
    expect(stack).toBeDefined();
  });

  it('should have size method', function() {
    expect(stack.size).toBeDefined();
  });

  it('should have push method', function() {
    expect(stack.push).toBeDefined();
  });

  it('should have pop method', function() {
    expect(stack.pop).toBeDefined();
  });

  it('should change size, add and remove item from stack', function() {
    expect(stack.size()).toEqual(0);

    stack.push(2);
    expect(stack.size()).toEqual(1);

    stack.push(4);
    expect(stack.size()).toEqual(2);

    stack.pop();
    expect(stack.size()).toEqual(1);
  });
});