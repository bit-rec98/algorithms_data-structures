// Given a positive integer "N", determine if the number is a power of 2 or not
//! An integer is a power of two if there exists an integer "X" such that "n" === 2x
// E.g. isPowerOfTwo(1) === true -> (2**0)
// isPowerOfTwo(2) === true -> (2**1)
// isPowerOfTwo(5) === false 

// Pseudocode 
/* 
n = 8
8/2 = 4 (remainder 0)
4/2 = 2 (remainder 0)
2/2 = 1 (remainder 0)

! if remainder is not 0 in any step, "n" is not a power of two and we can return false
! if remainder is 0 and "n" comes down to 1 eventually, n is a power of two
*/

function isPowerOfTwo(n){
    if(n < 1){
        return false;
    }

    while(n > 1){
        if(n % 2 !== 0){
            return false
        }
        n = n / 2
    } 

    return true;
}

console.log(isPowerOfTwo(1)); //true
console.log(isPowerOfTwo(2)); //true
console.log(isPowerOfTwo(5)); // false

console.log("--------------");

// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(128));

//* Big-o complexity -> O(logn) -> Linear logarithmic

// -----------------------------------------------------------
//? Other solution with constant TC -> O(1)

function isPowerOfTwoBitWise(n){
  if (n < 1) {
    return false;
  }

  //* Bitwise operator & 
  return (n & (n - 1)) === 0; //true to confirm a power of two number
}

//* In binary, a number that IS power of two except for 1, ends with 0
/* 
Numbers:
- 1 -> 1
- 2 -> 10
- 3 -> 100
- 4 -> 1000
*/

console.log(isPowerOfTwoBitWise(10));
console.log(isPowerOfTwoBitWise(8));
console.log(isPowerOfTwoBitWise(4));

// Bitwise & is 1 if both numbers are 1
