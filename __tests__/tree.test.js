import Tree from "tree";

describe("Tree Tests ", () => {

  let tree;

  beforeEach(() => {
    tree = new Tree();
  });

  it("Should add an element to the tree", () => {
    const value = 2;
    tree.insert(value);

    expect(tree.root.value).toEqual(2);
  });

  it("Should add an element to the tree when the root already exists", () => {
    const value = 2;
    tree.insert(value);
    tree.insert(3, value);

    expect(tree.root.children[0].value).toEqual(3);
  });

  it("Should add element for a tree depth of 3", () => {
    const value = 2;
    tree.insert(value);
    tree.insert(3, value);
    tree.insert(4, 3);

    expect(tree.root.children[0].children[0].value).toEqual(4);
  });
});
