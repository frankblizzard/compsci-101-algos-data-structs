// A stack is a LIFO(Last In First Out) data structure.
class Stack {
  memory = [];
  length = 0;

  // Pop an element off the top of the stack
  pop() {
    if (this.length === 0) return;

    this.length--;
    return this.memory.pop();
  }

  // Push an element on the top of the stack
  push(element) {
    this.memory.push(element);
    this.length++;
  }

  peek() {
    return this.memory[this.length - 1];
  }
}

export default Stack;
