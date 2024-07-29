// Given a "N", find the first "N" elements of a fibonacci sequence

function fibonacci(n) {
  const fib = [0, 1];

  //* Only one FOR loop -> O(n) -> Linear TC
  for (let i = 2; i < n; i++) {
    //! As N increases, the executions will increase too
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci(2)); //! [0, 1] -> Doesn't execute due to i < n
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

// Other executions
console.log(fibonacci(12)); // [   0,  1,  1,  2,  3, 5,  8, 13, 21, 34, 55, 89]
console.log(fibonacci(20))

//* How to determine the big-o
/* 
- It's possible to determine how many times each step is executed and then approximate to the big-o
- Use cheatsheet (don't completely rely on this): 
*A.Calculation NOT dependent on INPUT size -> O(1) -> Constant
*B. loop -> O(n) -> Linear
*C. nested loops -> O(n**2) -> Quadratic
*D. input size reduced by half -> O(logn) -> Logarithmic
*/
