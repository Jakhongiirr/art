// takes an array and value, returns the index of value. returns -1 if doesn't exist
// also JavaScript's built-in methods - .indexof(), .find(), findIndex().
// O(n) time complexity

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

const arr = [3, 2, 4, 1, 5, 9, 6, 7];
const val = 5;
const response = linearSearch(arr, val);

console.log(response); // 4
