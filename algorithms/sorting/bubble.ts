// bubble sort
// let's see bubble sort for array of numbers
// you can try yourself for strings

function swap(arr: number[], idx1: number, idx2: number): number[] {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  // or just arr[arr[idx1], arr[idx2]] = arr[arr[idx2], arr[idx1]];
  return arr;
}

function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      console.log(
        `Current array: [${arr}]; comparing ${arr[j]} with ${arr[j + 1]}`
      );
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break; // If no swaps were made, the array is already sorted.
  }
  return arr;
}

const arr = [3, 1, 2, 14, -1, 0, 8];
console.log(bubbleSort(arr));
