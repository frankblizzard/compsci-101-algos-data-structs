import insertionSort from "insertionSort";

describe("Insertion Sort Tests ", () => {

  it("Should sort an array using a Insertion Sort", () => {
    const array = [5, 6, 10, 1, 12];

    expect(insertionSort(array)).toEqual([1,5,6,10,12]);
  });
});
