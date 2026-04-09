// In JS, a Promise is an object representing
// the eventual completion (or failure) of
// an asynchronous operation and its resulting value.

// There are 3 states when a promise runs.
// 1. Pemding
// 2. fulfilled
// 3. Rejected

const myPromise = new Promise((resolve, reject) => {
  const status = true;

  if (status) {
    resolve("Operation ran successfully!");
  } else {
    reject("Something went wrong!");
  }
}); // output an object

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Process finished.");
  });
