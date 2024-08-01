const resource = "https://jsonplaceholder.typicode.com/userss";

const getPosts = async () => {
  const response = await fetch(resource);

  if(response.status !== 200){

    // Syntax for throwing custom errors
    throw new Error('Cannot fetch data');
  }

  const data = await response.json();

  return data;
};

getPosts()
  .then((data) => console.log("Resolved", data))
  .catch((error) => console.log("Rejected", error.message));
