// In JS, a Promise is an object representing
// the eventual completion (or failure) of
// an asynchronous operation and its resulting value.

//There are 3 states when a promise runs.
//1. Pending เข้าคอนดิชั่นที่เราเขียนไว้
//2. Fulfilled สำเร็จ
//3. Rejected ล้มเหลว

//class ชื่อ promise เรียกใช้ได้เลย
const myPromise = new Promise((resolve, reject) => {
  const status = false;

  if (status) {
    resolve("Operation ran successfully!");
  } else {
    reject("Something went wrong!");
  }
}); //output an object

// console.log(myPromise);

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Process finished.");
  }); //ไม่ว่าจะสำเร็จหรือไม่ให้รันเคสที่อยู่ใน finally
