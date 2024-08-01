const resource = "https://jsonplaceholder.typicode.com/users";

const getPosts = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                reject(undefined)
            }
        });

        request.open('GET', resource);
        request.send();
    }); 
}


getPosts(resource)
    .then(data => console.log("Data available: ", data))
    .catch(error => console.log("There was an error:", error))
