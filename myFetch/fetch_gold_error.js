function goldPrice() {
  const url = "https://api.api-ninjas.com/v1/goldprice";

  return fetch(url, {
    headers: { "X-Api-Key": "37Rkh6E7F2mcr5vHZdXyZnUhKY1jlsCZxoAPyzpe" },
  })
    .then((response) => {
      return response.json().then((data) => {
        if (response.ok) {
          console.log("Gold price data:");
          console.log(data);
          return data;
        } else {
          console.error("Something went wrong!", data.error);
          return null;
        }
      });
    })
    .catch((error) => {
      console.error("Network error!", error.message);
    });
}

goldPrice();
