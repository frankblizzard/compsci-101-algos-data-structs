import { shiftElementRight } from "helpers";

// O(n^2)
function insertionSort(arr) {
  // for each element after the first
  for (let i = 1; i < arr.length; i++) {

    // Get the current item
    const currentItem = arr[i];
    // The first index of the sorted sub list
    let sortedIndex = i - 1;

    // Iterate over the sorted list, shifting elements right
    // until you arrive at the end or the next one is smaller
    while (sortedIndex >= 0 && arr[sortedIndex] > currentItem) {
      shiftElementRight(sortedIndex, arr);
      sortedIndex--;
    }

    // Add the original item into its correct place.
    arr[sortedIndex + 1] = currentItem;
  }

  return arr;
}

export default insertionSort;
