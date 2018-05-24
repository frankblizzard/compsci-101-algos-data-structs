import BinarySearchTree from "binarySearchTree";

let bst;

describe("Binary Search Tree Tests", () => {
  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it("Should add an element to the root node of the binary tree", () => {
    const value = 4;
    bst.add(value);

    expect(bst.root.value).toEqual(value);
  });

  it("Should add extra elements to the left of the root node", () => {
    const value = 4;
    bst.add(value);
    bst.add(3);

    expect(bst.root.left.value).toEqual(3);
  });

  it("Should add extra elements to the right of the root node", () => {
    const value = 4;
    bst.add(value);
    bst.add(5);

    expect(bst.root.right.value).toEqual(5);
  });

  it("Should add extra elements 2 levels deep", () => {
    bst.add(4);
    bst.add(5);
    bst.add(7);
    bst.add(6);

    expect(bst.root.right.value).toEqual(5);
    expect(bst.root.right.right.value).toEqual(7);
    expect(bst.root.right.right.left.value).toEqual(6);
  });
});
