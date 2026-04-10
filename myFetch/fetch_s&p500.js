function getSp500() {
  const url = "https://api.api-ninjas.com/v1/sp500?limit=10";

  return fetch(url, {
    headers: { "X-Api-Key": "ci3MBkvBKhJTO6EP74Xqkp22KJYVaCqTVi1bcUhz" },
  }).then((response) => {
    return response.json().then((data) => {
      if (response.ok) {
        console.log("S&P 500 data:");
        console.log(data);
        return data;
      } else {
        throw new Error(data.error || "Request failed");
      }
    });
  });
}

getSp500()
  .then((data) => {
    console.log("Finished fetching S&P 500 data.", data);
  })
  .catch((error) => {
    console.error("Something went wrong!", error.message);
  });
