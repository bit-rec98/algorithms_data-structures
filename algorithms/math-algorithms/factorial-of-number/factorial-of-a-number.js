//! Given an integer "N", find the factorial of that integer
//* In maths, the factorial of a non-negative integer "n", denoted n!, is the PRODUCT of all positive integers less than or equal to "n"
//? The factorial of 0 is 1

// E.g.
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

function factorial(n) {
  let result = 1;

  //* i started at 2 to have effect in algorithm since multiplying for 1 doesn't have effect
  for (let i = 2; i <= n; i++) {
    result = result * i;
    console.log(`Result variable value at each iteration: ${result}`);
    console.log(`Iterator variable: ${i}`);
  }
  return result;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120 = 24*5

//* Big-o input size for this algorithm
// Linear Big-o -> O(n) since TC depende on how much N grows
