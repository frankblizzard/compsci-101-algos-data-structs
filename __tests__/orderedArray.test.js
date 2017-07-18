import orderedArray from "orderedArray";

describe("Ordered Array Tests ", () => {
	let array;

	beforeEach(() => {
		array = new orderedArray();
	})

	it("should insert an element into the sorted array with O(N)", () => {

		array.insertion(5);
		array.insertion(10);
		array.insertion(1);

		expect(array.length).toEqual(3);
		//expect(array.computations()).toEqual(6);
		expect(array.memory).toEqual([1, 5, 10]);
	});

	it("Should find an element with a binary search with O(log N)", () => {
		array.insertion(1);
		array.insertion(2);
		array.insertion(3);
		array.insertion(4);

		const found = array.binarySearch(4);
		const foundIndex = array.memory.indexOf(4);

		const found2 = array.binarySearch(1);
		const foundIndex2 = array.memory.indexOf(1);

		expect(found).toEqual(foundIndex);
		expect(found2).toEqual(foundIndex2);
	});

});
