const resource = "https://jsonplaceholder.typicode.com/users";

//* All this whole function is NON-code blocking
const getUsers = async (urlResource) => {
  //* This block is not necessary to implement when using ASYNC keyword
  //! .then((response) => {
  //!   console.log(response);
  //! });

  //* Since ASYNC it's being used, .then() block can be replaced with AWAIT keyword before fetch()
  //? const response = await fetch(resource)

  const responseObject = await fetch(urlResource); //Returns a promise which is resolved

  //* The object RESPONSE is stored in a (constant) variable (it can have any name)
  // console.log(responseObject); 

  // Resolving the response object and formatting with .json()
  const data = await responseObject.json();
  const status = responseObject.status;
  const headers = responseObject.headers;

  // console.log(data, status);
  return [data, status, headers];

  // At headers, the .set()/.get() methods are used for authorization/authentication 
  // console.log(headers);

};

//* Resolving/Rejecting async function promise - This code doesn't block the main thread
getUsers(resource)
  .then(data => console.log(data[0], data[1], data[2]))
  .catch(error => console.log(error));
