import unorderedArray from "unorderedArray";

describe("Unordered Array Tests ", () => {
  let array;

  beforeEach(
    () => {
      array = new unorderedArray();
    }
  );

  it("Should insert an element at the end with O(1) and increase length by 1", () => {
    array.insertion(
      5
    );

    expect(
      array.access(
        0
      )
    ).toEqual(
      5
    );
    expect(
      array.length()
    ).toEqual(
      1
    );
    expect(
      array.computations()
    ).toEqual(
      1
    );
  });

  it("Should find an element with a linear search with O(N)", () => {
    array.insertion(
      1
    );
    array.insertion(
      2
    );
    array.insertion(
      3
    );
    array.insertion(
      4
    );

    const found = array.linearSearch(
      4
    );
    const foundIndex = array
      .memory()
      .indexOf(
        4
      );

    expect(
      found
    ).toEqual(
      foundIndex
    );
    expect(
      array.computations()
    ).toBeGreaterThan(
      array.length()
    );
  });

  it("Should delete the specified element with O(N)", () => {
    array.insertion(
      1
    );
    array.insertion(
      2
    );
    array.insertion(
      3
    );
    array.insertion(
      4
    );

    array.deletion(
      4
    );

    expect(
      array.length()
    ).toEqual(
      3
    );
    expect(
      array.computations()
    ).toBeGreaterThan(
      array.length()
    );
    expect(
      array
        .memory()
        .indexOf(
          4
        )
    ).toEqual(
      -1
    );
  });
});
