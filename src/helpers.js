const compose = (...fns) => val =>
  fns.reverse().reduce((prevFn, nextFn) => nextFn(prevFn(val)), val => val);

const median = values => {
  const half = Math.floor(values.length / 2);

  if (values.length % 2) {
    return half;
  } else {
    return (half + (half - 1)) / 2.0;
  }
};

const swap = (idx1, idx2, arr) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const remove = (value, arr) => {
  const idx = arr.indexOf(value);
  if (!~idx) {
    throw new Error(`Item ${value} does not exist in array - ${arr}`);
  }
  arr.splice(idx, 1);
}

function shiftElementRight(idx, arr) {
  arr[idx + 1] = arr[idx];
}


export { compose, median, swap, shiftElementRight, remove };
