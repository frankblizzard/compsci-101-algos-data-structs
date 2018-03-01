import HashTable from "hashTable";

describe("Hash Table Tests ", () => {

  let table;

  const TEST_KEY = "test";

  const TEST_VALUE = 2;

  beforeEach(() => {
    table = new HashTable();
    table.set(TEST_KEY, TEST_VALUE);
  });

  it("Should insert an element into the hash table", () => {
    expect(table.memory.indexOf(TEST_VALUE)).not.toEqual(-1);
  });

  it("Should fetch an element from the hash table", () => {
    const result = table.get(TEST_KEY);

    expect(result).toEqual(2);
  });

  it("Should remove an element from the list", () => {
    table.delete(TEST_KEY);

    expect(table.memory.indexOf(TEST_VALUE)).toEqual(-1);
  });

});
