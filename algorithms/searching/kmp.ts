// better way of naive string search
// watch this video for explanation - https://youtu.be/V5-7GzOfADQ
// O(n+m) time complexity

function buildKMPTable(pattern: string): number[] {
  const table = new Array(pattern.length).fill(0);
  let prefix = 0;

  for (let i = 1; i < pattern.length; i++) {
    while (prefix > 0 && pattern[i] !== pattern[prefix]) {
      prefix = table[prefix - 1];
    }

    if (pattern[i] === pattern[prefix]) {
      prefix++;
    }

    table[i] = prefix;
  }

  return table;
}

function kmpSearch(text: string, pattern: string): number[] {
  const table = buildKMPTable(pattern);
  const matches: number[] = [];
  let textIndex = 0;
  let patternIndex = 0;

  while (textIndex < text.length) {
    if (text[textIndex] === pattern[patternIndex]) {
      textIndex++;
      patternIndex++;

      if (patternIndex === pattern.length) {
        matches.push(textIndex - patternIndex);
        patternIndex = table[patternIndex - 1];
      }
    } else {
      if (patternIndex !== 0) {
        patternIndex = table[patternIndex - 1];
      } else {
        textIndex++;
      }
    }
  }

  return matches;
}

const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = kmpSearch(text, pattern);
console.log("Pattern found at positions:", result);
