import { swap } from "helpers";

function findIndexOfLowestValue(idx, arr) {
  let lowest;

  for (var i = idx; i < arr.length - 1; i++) {
    lowest = arr[i] < arr[i + 1] ? i : i + 1;
  }

  return lowest;
}

// O(n^2)
function selectionSort(arr) {
  // We only need to iterate until one before the end.
  // Once we have reached the last index, the list should be sorted.
  for (let i = 0; i < arr.length - 1; i++) {
    const lowestIdx = findIndexOfLowestValue(i, arr);
    swap(i, lowestIdx, arr);
  }

  return arr;
}

export default selectionSort;
