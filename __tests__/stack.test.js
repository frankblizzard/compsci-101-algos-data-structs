import stack from "stack";

describe("Stack Tests", () => {
  let stackInstance;

  beforeEach(() => {
    stackInstance = new stack();
  });

  it("Should push an element on to the stack and increment the length", () => {

    stackInstance.push(5);

    expect(stackInstance.length).toEqual(1);
  });

  it("Should pop an element off the top of the stack if one exists.", () => {

    stackInstance.push(5);

    expect(stackInstance.pop()).toEqual(5);
    expect(stackInstance.length).toEqual(0);
  });

  it("Should return immediately when an attempt to pop is made and there are no elements on the stack.", () => {

    expect(stackInstance.pop()).toBeUndefined();
  });

  it("Should peek and return the value on the top of the stack", () => {
    stackInstance.push(5);

    expect(stackInstance.peek()).toEqual(5);
    expect(stackInstance.length).toEqual(1);
  });

});
