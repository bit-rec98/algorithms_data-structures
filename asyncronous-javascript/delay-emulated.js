console.log(1);
console.log(2);

// Function that takes time - emulated async function
setTimeout(() => {
    console.log('callback with time delay');
}, 2000);

console.log(3);
console.log(4);


