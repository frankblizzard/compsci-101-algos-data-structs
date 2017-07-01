const compose = (fns...) => (val) => 
	fns
	.reverse()
		.reduce((prevFn, nextFn) => nextFn(prevFn(val)), (val) => val);

export default {
	compose
};
