// use binary search to efficently find insertion index
// look at algorithms/searching/binary.ts file for explanation of binary search
// not mandatory, but efficent to use this algorithm here ))
function binarySearch(
  arr: number[],
  value: number,
  start: number,
  end: number
): number {
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (value < arr[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

// use helper function
function move(arr: number[], fromIndex: number, toIndex: number): number[] {
  const insertionValue = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, insertionValue);
  return arr;
}

// actual insertion sort algorithm
function insertionSort(arr: number[]): number[] {
  const sortedArray: number[] = [...arr];
  const n: number = sortedArray.length;

  for (let i = 1; i < n; i++) {
    const currentElement = sortedArray[i];
    const insertionIndex = binarySearch(sortedArray, currentElement, 0, i);
    if (insertionIndex !== i) {
      console.log(
        `Current array: [${sortedArray}]; moving ${arr[i]} to index ${insertionIndex}`
      );
      move(sortedArray, i, insertionIndex);
    }
  }
  console.log("\nResult:");
  return sortedArray;
}

const arr = [3, 1, 2, 14, -1, 0, 8];
const result = insertionSort(arr);
console.log(`[${result}]`);
