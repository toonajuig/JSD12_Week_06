function getNutritionfood(food, quantity) {
  const url = `https://api.api-ninjas.com/v1/nutritionitem?query=${food}&quantity=${quantity}`;

  return fetch(url, {
    headers: { "X-Api-Key": "ci3MBkvBKhJTO6EP74Xqkp22KJYVaCqTVi1bcUhz" },
  }).then((response) => {
    return response.json().then((data) => {
      if (response.ok) {
        console.log("Nutrition data:");
        console.log(data);
        return data;
      } else {
        throw new Error(data.error || "Request failed");
      }
    });
  });
}

getNutritionfood("apple", "1")
  .then((data) => {
    console.log("Finished fetching nutrition data", data);
  })
  .catch((error) => {
    console.error("Something went wrong!", error.message);
  });
