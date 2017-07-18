function unorderedArray() {
  this.memory = [];
  this.length = 0;
  this.computations = 0;

  return {
    // O(1)
    insertion: element => {
      this.memory[this.length] = element;
      this.length++;
      this.computations++;
    },

    // O(N)
    deletion: deletionTarget => {
      for (let i = 0; i < this.length; i++) {
        this.computations++;
        if (this.memory[i] === deletionTarget) {
          delete this.memory[i];
          this.length--;
          return;
        }
      }
      return -1;
    },

    // O(N)
    linearSearch: searchTarget => {
      for (let i = 0; i < this.length; i++) {
        this.computations++;
        if (this.memory[i] === searchTarget) {
          return i;
        }
      }

      return -1;
    },

    // O(1)
    access: address => this.memory[address],

    length: () => this.length,

    computations: () => this.computations,

    memory: () => this.memory
  };
}

export default unorderedArray;
