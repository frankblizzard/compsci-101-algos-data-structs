import queue from "queue";

describe("queue Tests", () => {
  let queueInstance;

  beforeEach(() => {
    queueInstance = new queue();
  });

  it("Should push an element on to the queue and increment the length", () => {

    queueInstance.enqueue(5);

    expect(queueInstance.length).toEqual(1);
  });

  it("Should dequeue an element from the front of the queue if one exists.", () => {

    queueInstance.enqueue(5);

    expect(queueInstance.dequeue()).toEqual(5);
    expect(queueInstance.length).toEqual(0);
  });

  it("Should return immediately when an attempt to dequeue is made and there are no elements on the queue.", () => {

    expect(queueInstance.dequeue()).toBeUndefined();
  });

  it("Should peek and return the value at the front of the queue", () => {
    queueInstance.enqueue(5);

    expect(queueInstance.peek()).toEqual(5);
    expect(queueInstance.length).toEqual(1);
  });

});
