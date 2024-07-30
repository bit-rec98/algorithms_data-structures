// Given an array of "N" elements and a target element "T", find the index of "T" in the array.
// Return -1 if the target is not found.

// Example:
/* 
    arr = [-5, 2, 10, 4, 6] 
    t = 10 -> Should return 2 (index [2] at arr)
    
    --------------------------------------------
    arr = [-5, 2, 10, 4, 6]
    t = 6 -> Return 4

    --------------------------------------------
    arr = [-5, 2, 10, 4, 6]
    t = 20 -> Return -1
*/

//? Linear search pseudocode
/* 
- Start at the first element in the array and move towards the last
- At each element, check if the element is equal to the target element
- If element found, return the index of the element
- If element not found, return -1
*/

//* Own solution
let arr = [-5, 2, 10, 4, 6];
function ownLinearSearch(arr, target){

    for(let i = 0; i < arr.length; i++){
        if (target === arr[i]) {
          return arr.indexOf(arr[i]);
        }
    }
    return -1
}
console.log(ownLinearSearch(arr, 10)); // 2
console.log(ownLinearSearch(arr, 6)); // 4
console.log(ownLinearSearch(arr, 20)); // -1

// -----------------------------------------------------------
//* Video solution
function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        };
    };
    return - 1
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 6));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));


//? Big-O complexity
//* O(n) -> Linear TC
