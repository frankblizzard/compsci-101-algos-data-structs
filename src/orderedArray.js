class OrderedArray {
    memory =  [];
    length = 0;
    computations = 0;

    // O(N)
    insertion(value) {
      let i;

      // For each element if the value is smaller, push the bigger element one
      // index to the right
      for (i = this.length - 1; value < this.memory[i] && i >= 0; i--) {
        this.computations++;
        // push current element to next index
        this.memory[i + 1] = this.memory[i];
      }

      // Increase the length and add the new element to the space left by the element next
      // to it.
      this.length++;
      this.memory[i + 1] = value;
    }

    // O(log N)
    binarySearch(target, values = this.memory) {
      const middle = Math.floor(values.length / 2);

      if (values[middle] === target) {
        this.computations++;
        return middle;
      } else if (values[middle] < target) {
        this.computations++;
        // if the matched value is less than the target, we need to add half so
        // we can get the true index of the element in the latter half of the array.
        return middle + this.binarySearch(target, values.slice(middle));
      } else if (values[middle] > target) {
        this.computations++;
        return this.binarySearch(target, values.slice(0, middle));
      } else {
        return -1;
      }
    }

};

export default OrderedArray;
