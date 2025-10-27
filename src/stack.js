const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.el = []
  }
    push(value) {
      this.el.push(value);
  }

  pop() {
    return this.el.pop();
  }

  peek() {
    if (this.el.length === 0) {
      return undefined;
    }
    return this.el[this.el.length-1]
  }
}

module.exports = {
  Stack,
};
