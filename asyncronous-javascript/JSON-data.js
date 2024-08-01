const getPosts = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Data couldn't be fetched", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/posts");

  request.send();
};

function callBackFunctionDeclared(error, data) {
  if (error) {
    console.log(`There was an error: ${error}`);
  }
  console.log("Data available", data);
}

getPosts(callBackFunctionDeclared);
