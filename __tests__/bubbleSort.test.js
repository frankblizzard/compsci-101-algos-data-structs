import bubbleSort from "bubbleSort";

describe("Bubble Sort Tests ", () => {

  it("Should sort an array using a Bubble Sort", () => {
    const array = [5, 6, 10, 1, 12];

    expect(bubbleSort(array)).toEqual([1,5,6,10,12]);
  });
});
