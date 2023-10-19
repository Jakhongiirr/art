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
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      console.log(
        `Current array: [${arr}]; compare ${arr[j]} with ${arr[j + 1]}`
      );
      if (arr[j] > arr[j + 1]) arr = swap(arr, j, j + 1);
    }
  }
  console.log("\nResult:");
  return arr;
}

const arr = [3, 1, 2, 14, -1, 0, 8];
console.log(bubbleSort(arr));
