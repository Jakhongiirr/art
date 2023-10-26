function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  
  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
console.log(`left: [${left}]; right: [${right}]`)
  // Recursively sort both halves
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  // Merge the sorted halves
  return merge(leftSorted, rightSorted);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add the remaining elements from both arrays (if any)
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
const unsortedArray: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedArray: number[] = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
