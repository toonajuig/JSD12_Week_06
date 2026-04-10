const url = "https://api.api-ninjas.com/v1/animals?name=Hippo";
const option = {
  method: "GET",
  headers: {
    "X-Api-Key": "37Rkh6E7F2mcr5vHZdXyZnUhKY1jlsCZxoAPyzpe",
    "Content-Type": "application/json",
  },
};

fetch(url, option)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });
