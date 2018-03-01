/**
 * A hash table
 */
class HashTable {
  memory = [];

  // TODO: Comment with full functionality
  hash(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      // Oh look– magic.
      let code = key.charCodeAt(index);
      hash = ((hash << 5) - hash) + code | 0;
    }
    return hash;
  }

  /**
   * Get a value from the hash set. This will hash the key, find the appropriate item and return the value.
   * @param {String} key - plain text key to be hashed to a memory address
   */
  get(key) {
    const address = this.hash(key);
    return this.memory[address];
  }

  set(key, value) {
    const address = this.hash(key);
    this.memory[address] = value;
  }

  delete(key) {
    const address = this.hash(key);

    if (this.memory[address]) {
      delete this.memory[address];
    }
  }
}

export default HashTable;
