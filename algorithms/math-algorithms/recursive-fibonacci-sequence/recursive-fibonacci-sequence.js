//! Given a "N" number, find the nth element of the fibonacci sequence
//? The fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
//* The first two numbers in the sequence are 0 and 1 (0, 1, 1, 2, 3, 5, 8...)

/* 
e.g. 
recursiveFibonacci(0) = 0
recursiveFibonacci(1) = 1
recursiveFibonacci(6) = 8
*/

//* Tips for recursive solutions
/* 
- Figure out how to break down the problem into smaller versions of the same problem
- Identify the base case for recursion
*/

//* Recursive fibonacci sequence
/* 
If F represents a function to calculate the fibonacci number: 

Fn = Fn-1 + Fn-2 -> Each number is the sum of the previous two numbers

Two calculate the previous two number, it's necessary to calculate their own previous two numbers for each one. 
*/

//* Base case
/* 
F0 = 0 and F1 = 1
*/

//* Example
/* 
F2 = F1 + F0
F2 = 1 + 0
F2 = 1
*/

function recursiveFibonacci(n) {
  // Base case
  if (n < 2) {
    return n;
  }

  // To get Fn
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

console.log(recursiveFibonacci(7)); // 13


//? Big-O TC
//* O(2n) -> Recursion not recommended for fibonacci sequence problem