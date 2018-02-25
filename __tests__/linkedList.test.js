import LinkedList from "linkedList";

describe("Linked List Tests ", () => {

  let list;

  beforeEach(() => {
    list = new LinkedList();
  })

  it("Should insert an element into the start of the list and set the head node.", () => {

    const newNode = { value: 1, next: null };

    list.insert(1, 0);

    expect(list.length).toEqual(1);
    expect(list.head.value).toEqual(1);
    expect(list.access(0)).toEqual(newNode);
  });

  it("Should insert an element into the end of the list", () => {

    const newNode = { value: 1, next: null };

    list.insert(1, 0);
    list.insert(2, 1);

    expect(list.length).toEqual(2);
    expect(list.head.value).toEqual(1);
    expect(list.access(0).value).toEqual(1);
    expect(list.access(1).value).toEqual(2);
  });

  it("Should remove an element from the list", () => {

    const newNode = { value: 1, next: null };

    list.insert(1, 0);
    expect(list.length).toEqual(1);
    expect(list.head.value).toEqual(1);

    list.delete(0);

    expect(list.length).toEqual(0);
  });
});
