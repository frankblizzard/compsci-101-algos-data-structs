// A stack is a FIFO(First In First Out) data structure.
// This means it takes the oldest value first.
function queue() {

  return {
    memory: [],
    length: 0,

    // Push an element on the queue
    enqueue(element) {
      this.length++;
      this.memory.push(element);
    },

    // Remove the first/oldest value from the front of the queue
    dequeue() {
      if (this.length === 0) return;

      this.length--;
      return this.memory.shift();
    },

    peek() {
      return this.memory[0];
    }
  };
}

export default queue;
