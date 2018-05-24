class UnorderedArray {
    memory = [];
    length = 0;
    computations = 0;

    // O(1)
    insertion(element) {
      this.memory[this.length] = element;
      this.length++;
      this.computations++;
    }

    // O(N)
    deletion(deletionTarget) {
      for (let i = 0; i < this.length; i++) {
        this.computations++;
        if (this.memory[i] === deletionTarget) {
          delete this.memory[i];
          this.length--;
          return;
        }
      }
      return -1;
    }

    // O(N)
    linearSearch(target) {
      for (let i = 0; i < this.length; i++) {
        this.computations++;
        if (this.memory[i] === target) {
          return i;
        }
      }

      return -1;
    }

    // O(1)
    access(address) { return this.memory[address] }
}

export default UnorderedArray;
