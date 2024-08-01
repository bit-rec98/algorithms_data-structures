const getPosts = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Data couldn't be fetched", undefined);
    }
  });

  // "https://jsonplaceholder.typicode.com/posts"
  request.open("GET", resource);

  request.send();
};

//! Callback hell - AVOID GENERATING THIS STRUCTURE
getPosts("json/data-1.json", (error, data) => {
  if (error) {
    console.log(`There was an error: ${error}`);
  }
  console.log("Data available", data);

  getPosts("json/data-2.json", (error, data) => {
    if (error) {
      console.log(`There was an error: ${error}`);
    }
    console.log("Data available", data);
    
    getPosts("json/data-3.json", (error, data) => {
      if (error) {
        console.log(`There was an error: ${error}`);
      }
      console.log("Data available", data);
    });
  });
});

//! HTTP requests for local files is DEPRECATED
//Error: Access to XMLHttpRequest at ${url} from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, isolated-app, brave, https, chrome-untrusted, data, chrome-extension, chrome.