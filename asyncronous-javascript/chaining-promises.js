const resource = "https://jsonplaceholder.typicode.com/users";

const getUsers = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject(undefined);
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

const getPosts = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if(request.readyState === request.DONE && request.status === 200){
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if(request.readyState === request.DONE){
        reject(undefined);
      };
    });

    request.open('GET', resource);
    request.send();
  });
};

const getPhotos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if(request.readyState === request.DONE && request.status === 200){
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if(request.readyState === request.DONE){
        reject(undefined);
      }
    })

    request.open('GET', resource);
    request.send();
  });
}


getUsers(resource)
  // Executed when promise is resolved/rejected - There can be 1 to N .then() executions depending on the functionality required - Regarding network requests, data received can be handled at only one .then() callback function
  .then((data) => {
    console.log("Promise 1 - 'getUsers' resolved ");
    console.log("Data available: ", data);

    // Chaining promises below
    const resource = "https://jsonplaceholder.typicode.com/posts";
    return getPosts(resource); //*This execution returns a promise to handle request data
  })

  //* Promise callback for resolving posts request 
  .then((data) => {
    console.log("Promise 2 - 'getPosts' resolved");
    console.log("Posts available: ", data);

    const resource = "https://jsonplaceholder.typicode.com/photos";
    return getPhotos(resource)
  })

  .then((data) => {
    console.log("Promise 3 - 'getPhotos' resolved");
    console.log('Photos available', data);
  })

  //! Executed when promise to get posts is rejected - NOT NECESSARY TO ADD
  // .catch((error) => {
  //   console.log("There was an error getting posts", error);
  // })

  //* Executed when promise to get users/posts is rejected - this .catch() method catches any error
  .catch((error) => {
    console.log("There was an error getting resources:", error);
  });
