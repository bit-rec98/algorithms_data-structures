// fetch() syntax
const resource = "https://jsonplaceholder.typicode.com/users";

// fetch(resource)
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((reject) => {
//         console.log(reject)
//     })

fetch(resource)
  //* block executed when the promise is RESOLVED
  // If the resource (endpoint) is found but the url is mistyped, the data to find doesn't exist or any other server issue, the promise will be resolved but with different response code status
  .then((response) => {
    console.dir(response);

    //* The .json method provides the data intended to manage with the request
    // response.json()

    //! Data cannot be formatted with .json and saved in a variable or returned directly 
    // const data = response.json()

    //* fetch() .then() method returns a promise  
    console.log(response.json());
    return response.json() //This is a promise

  })

//* Data retrieved from line 25 at which a promise is being returned   
  .then((data) => {
    console.log(data)
  })

  //! block executed when the promise is REJECTED - usually when there's network errors
  .catch((error) => {
    console.log(error);
  });
