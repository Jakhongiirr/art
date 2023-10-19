// factorial
function factorial(n: number): number {
  if (n <= 1) return n;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
