# javascript-stack 

### Getting Started

For testing you need to install some dependencies:

```bash
npm install
```

Then run tests:

```bash
npm test
```

### API
#### .size()

Method for returning the size of the stack.

```javascript
var stack = new Stack();

stack.push(6); // stack is now {0: 6}
stack.size(); // 1
```

#### .push(data)

Method for pushing items into the stack.

```javascript
var stack = new Stack();

stack.push(15); // stack is now {0: 15}
```

#### .pop()

Method for removing the last item from the stack.

```javascript
var stack = new Stack();

stack.push(3); // stack is now {0: 3}
stack.push(8); // stack is now {0: 3, 1: 8}
stack.pop(); // return 8, stack is now {0: 3}
```