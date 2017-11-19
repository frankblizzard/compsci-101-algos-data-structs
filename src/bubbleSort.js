import { swap } from "helpers";

// O(N^2)
function bubbleSort(arr) {
  // For each element in the array
  arr.forEach((val, idx) => {
    // Iterate and swap the lower value for the higher value.
    arr.forEach((val, idx) => {
      if (arr[idx] > arr[idx + 1]) {
        swap(idx, idx + 1, arr);
      }
    });
  });

  return arr;
}

export default bubbleSort;
