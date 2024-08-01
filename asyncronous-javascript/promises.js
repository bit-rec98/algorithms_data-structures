// Network request
const getData = () => {
    return new Promise((resolve, reject) => {
        // network request code
        resolve('Data received');
        reject('Error detected');
    });
};

//* Executing the getData function returns the promise
getData()
  //? Depending if resolve or reject function executes, .then() or .catch() will execute

  //* A way to execute a resolve and reject callbacks => .then((resolveExec), (rejectExec))
  //! .then((data) => console.log(data), (error) => console.log(error));

  //* Another way to execute the resolve and reject methods are the following:
  .then((data) => console.log(data)) //Executed if resolved
  .catch((error) => console.log(error)); //Not executed if RESOLVED



