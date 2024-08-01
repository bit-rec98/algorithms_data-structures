const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request.readyState); -> 1 - 2 - 3 - 4 -> There are 4 readyStates
    if(request.readyState === 4){
        console.log(request.responseText);
    };
    console.log(request);
})

request.open("GET", "https://jsonplaceholder.typicode.com/posts");

request.send();

/* 
readyState states:
0 -> Unsent
1 -> Opened
2 -> Headers_received
3 -> Loading
4 -> Done
*/
