const getPosts = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        // Invoking the function received as parameter to execute it here
        callback(undefined, request.responseText);

    } else if (request.readyState === 4) {
        callback("Data couldn't be fetched", undefined);

      }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/posts");

  request.send();
};

//* The getPosts() function receives a function previously declared (optional to declare it like below) as an argument (doesn't work with arrow functions)

console.log(1);
console.log(2);

//* Code not blocked when executing this function - ASYNCHRONOUS executions
function callBackFunctionDeclared(error, data) {
    if(error){
      console.log(`There was an error: ${error}`);
    }
    console.log(`Data available: ${data}`)
}

getPosts(callBackFunctionDeclared);

console.log(3);
console.log(4);

//* Defining the callback in the argument itself
/* getPosts(() => {
    console.log('callback executed')
}) */

/* 
  getPosts((error, data) => {
    if(error){
      console.log(`There was an error: ${error}`)
    }
    console.log(`Data available: ${data}`);
  })




*/


