const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if(request.readyState === 4){
    console.log("Data couldn't be fetched");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/posts");

request.send();

/*Response status codes:
100 -> Information
200 -> Success
300 -> Redirection
400 -> Resources not found
500 -> Server errors
*/