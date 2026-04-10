function getAllAnimalsByLetter(letter) {
  let allResults = [];

  const url = `https://api.api-ninjas.com/v1/animals?name=${letter}`;
  return fetch(url, {
    headers: { "X-Api-Key": "37Rkh6E7F2mcr5vHZdXyZnUhKY1jlsCZxoAPyzpe" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        allResults.push(...data);
      }

      console.log(
        `Found ${allResults.length} animals containing the letter ${letter}`,
      );
      console.log(allResults);
    });
}

getAllAnimalsByLetter("a");
