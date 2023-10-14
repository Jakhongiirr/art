// Naive String Search - brute force to search for a substring of a string
// below example shows how many times does the substring occur in the 'long' string
// parameter str is the long string, ss is the substring in the example below:

function nss(str, ss) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let match = 0;
    for (let j = 0; j < ss.length; j++) {
      if (str[i + j] !== ss[j]) break;
      else match++;
    }
    if (match === ss.length) count++;
  }

  return count;
}

const string = "mgoomg omg! omgaaa";
const subString = "omg";
const response = nss(string, subString);

console.log(response);
