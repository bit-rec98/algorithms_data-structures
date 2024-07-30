//! Given a sorted (Only works in sorted arrays) array of N elements and a target element T
// Find the index of T in the array. 
// Return -1 if the target element is not found

/* 
E.g. 

arr = [-5, 2, 4, 6, 10]
t = 10 -> Return 4

arr = [-5, 2, 4, 6, 10]
t = 6 -> Return 3

arr = [-5, 2, 4, 6, 10]
t = 20 -> Return -1
*/

//? Pseudocode
// - If the array is empty, return -1 as the element cannot be found
// - If the array has elements, find the middle element in the array. 
// - If the target is equal to the middle element, return the middle element index
// - If target is less than the middle element, binary search left half of the array
// - If target is greater than middle element, binary search right half of the array
// 

//? Notes
// When having two elements in an array to apply binary search, the middle element is the FIRST of the two ones.


let arr = [-5, 2, 4, 6, 10];

function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        
        if (target === arr[middleIndex]) {
            return middleIndex;
        };

        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        };
    };

    return -1;
};

console.log(binarySearch(arr, 10)); // 4
console.log(binarySearch(arr, 6)); // 3
console.log(binarySearch(arr, 20)); // -1 

//? Big-O TC
//* O(logn) -> Input size reduced by half since arr is reduced by half at each iteration