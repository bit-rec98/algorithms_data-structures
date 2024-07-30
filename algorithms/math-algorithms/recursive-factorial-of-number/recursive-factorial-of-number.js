//! Given an integer "N", find the factorial of that integer
//* The factorial o a non-integer "N", denoted n!, is the product of all positive integers less than or equal to "N"
/* 
factorial(0) = 1
factorial(4) = 4 * 3 * 2 * 1 = 24
factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
*/

//? Tips for recursive solutions
//* - Identify the base case for recursion
//* -
//* -
// 

//* Factorial of a non-negative integer "N" is the product of all positive integers less than or equal to "N"
// 5! = 5*4*3*2*1   5*4!
// 4! = 4*3*2*1     4*3!
// 3! = 3*2*1       3*2!
// 2! = 2*1         2*1!
// 1! = 1*1         1*0!
// 0! = 1

//? Factorial formula
//* n! = n * (n-1)!

function recursiveFactorial(n){
    if(n === 0){
        return 1;
    };
    return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120

//? Big-O TC
//* O(n)