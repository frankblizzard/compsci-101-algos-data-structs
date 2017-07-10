
function orderedArray() {
	this.memory = [];
	this.length = 0;
	this.computations = 0;

	return {
		insertion: (value) => {
			let i;

			// For each element if the value is smaller, push the bigger element one
			// index to the right
			for (i = this.length - 1; (value < this.memory[i] && i >= 0); i--) {
				this.computations++;
				this.memory[i + 1] = this.memory[i];
			}

			// Increase the length and add the new element to the space left by the element next
			// to it.
			this.length++;
			this.memory[i + 1] = value;
		},
		binarySearch: (searchTarget, values = this.memory) => { 

				const half = Math.floor(this.length / 2);

				if (this.memory[half] < searchTarget && values.length > 1) {

					this.computations++;
					return this.binarySearch(searchTarget, values.slice(half));

				} else if (this.memory[half] > searchTarget && values.length > 1) {

					this.computations++;
					return this.binarySearch(searchTarget, values.slice(0, half))

				} else if (this.memory[half] === searchTarget) {

					this.computations++;
					return half; 

				} else {
					return -1;
				}
		},
		memory: () => this.memory,
		computations: () => this.computations,
		length: () => this.length
	};

}


export default orderedArray;
