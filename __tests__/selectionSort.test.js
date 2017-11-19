import selectionSort from "selectionSort";

describe("Selection Sort Tests ", () => {

  it("Should sort an array using a Selection Sort", () => {
    const array = [5, 6, 10, 1, 12];

    expect(selectionSort(array)).toEqual([1,5,6,10,12]);
  });
});
