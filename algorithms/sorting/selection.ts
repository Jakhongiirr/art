// repeatedly selects the smallest element from the unsorted portion of an array 
// and moves it to the sorted portion.
// also you can choose the biggest one and do the same

function swap(arr: number[], idx1: number, idx2: number): number[] {
  // e.g: [1, 2] becomes [2, 1]
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
}

function selectionSort(arr: number[]): number[] {
  let sortedArray: number[] = [...arr];
  const n: number = sortedArray.length;

  for (let i = 0; i < n; i++) {
    let minimum = sortedArray[i];
    for (let j = i + 1; j < n; j++) {
      console.log(
        `Current array: [${sortedArray}]; selected minimum: ${minimum}; compare with: ${sortedArray[j]}`
      );
      if (sortedArray[j] < minimum) {
        minimum = sortedArray[j];
        swap(sortedArray, i, j);
      }
    }
  }
  console.log("\nResult:");
  return sortedArray;
}

const arr = [3, 1, 2, 14, -1, 0, 8];
const result = selectionSort(arr);

console.log(`[${result}]`);
