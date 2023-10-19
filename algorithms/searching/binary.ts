// we must have sorted array to be able to use binary search algorithm!
// we get 3 pointers - left, right and mid
// if mid value is bigger than the searching value, we bring left to mid and recalculate new mid
// if mid value is smaller than searching value, we bring right to mid and recalculate new mid
// continue until mid will be equal to searching value
// if searching value doesn't exist and left becomes larger or equal than right, stop the loop
// and return -1.
// O(logn) time complexity

// the example below shows how to implement this for sorted ascending order array
// do it yourself for descending order - [15, 14, 13, 12, ......3, 2, 1]

function binarySearch(arr: number[], value: number): number {
  let left = 0;
  let right = arr.length - 1;
  let mid: number;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    console.log(
      `left index = ${left}, mid index = ${mid}, right index = ${right}`
    ); // to see visually what's happening
    if (arr[mid] === value) return mid;
    if (arr[mid] > value) right = mid - 1;
    if (arr[mid] < value) left = mid + 1;
  }
  return -1;
}

const sortedArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

const val = 13; // -> searching value
const response = binarySearch(sortedArray, val);

console.log(`index of ${val} is ${response}`); // 12 (index)
