// Given a natural number "N", determine if the number is prime or not
// A prime number is a natural number greater than 1 and that is not a product of two smaller natural numbers.
// isPrime(5) = true -> (1*5 or 5*1)
// isPrime(4) = false -> (1*4 or 2*2 or 4*1)

function isPrime(n){
    if(n < 2){
        return false;
    };
    
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            // Not a prime number
            return false;
        }
    }

    // A prime number
    return true;
}

console.log(isPrime(1)); //false
console.log(isPrime(4)); //false
console.log(isPrime(5)); //true

// Big-o notation for this algorithm
//* O(n) -> Linear TC

// -----------------------------------------------------------
//? Optimized solution
function isPrime(n){
    if(n < 2){
        return false;
    };
    
    // .sqrt(n) -> Square root
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            // Not a prime number
            return false;
        }
    }

    // A prime number
    return true;
}

console.log(isPrime(1)); //false
console.log(isPrime(4)); //false
console.log(isPrime(5)); //true

//* Implementing this solution makes the input size increase in less proportions than the previous code due to calculating the square root of N
//? Big-o complexity -> O(sqrt(n)) -> Stills linear but less proportioned in terms of growing
