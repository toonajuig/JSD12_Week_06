# Promise 01-03 Summary

เอกสารนี้สรุปและอธิบายไฟล์ `promises_01.js`, `promises_02.js` และ `promise_03.js` แบบสั้น กระชับ และอ่านแล้วเห็นภาพการทำงานของ Promise ชัดขึ้น

## Promise คืออะไร

`Promise` คือ object ที่ใช้แทน "ผลลัพธ์ของงานที่ยังไม่เสร็จตอนนี้ แต่จะได้ผลลัพธ์ในภายหลัง"

Promise มี 3 สถานะหลัก:

1. `pending` = กำลังรอผล
2. `fulfilled` = ทำงานสำเร็จ
3. `rejected` = ทำงานไม่สำเร็จ

## โครงสร้างพื้นฐานของ Promise

```js
const myPromise = new Promise((resolve, reject) => {
  const status = true;

  if (status) {
    resolve("Operation ran successfully!");
  } else {
    reject("Something went wrong!");
  }
});
```

ความหมายของแต่ละส่วน:

- `new Promise(...)` ใช้สร้าง Promise ใหม่
- `resolve(...)` ใช้ส่งค่ากลับเมื่อทำงานสำเร็จ
- `reject(...)` ใช้ส่ง error หรือข้อความเมื่อทำงานล้มเหลว

หลังจากนั้นเรามักรับผลด้วยชุดนี้:

```js
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
```

ความหมาย:

- `.then()` ทำงานเมื่อ Promise สำเร็จ
- `.catch()` ทำงานเมื่อ Promise ล้มเหลว
- `.finally()` ทำงานเสมอ ไม่ว่าจะสำเร็จหรือล้มเหลว

## ไฟล์ `promises_01.js`

ในไฟล์นี้มีบรรทัดสำคัญ:

```js
const status = false;
```

เพราะ `status` เป็น `false` จึงเข้าเงื่อนไขนี้:

```js
reject("Something went wrong!");
```

ลำดับการทำงาน:

1. สร้าง Promise
2. ตรวจค่า `status`
3. ค่าเป็น `false`
4. Promise กลายเป็น `rejected`
5. เข้า `.catch()`
6. จากนั้นเข้า `.finally()`

ผลที่ต้องเข้าใจ:

- ข้อความ error จะถูกส่งไปที่ `.catch()`
- `finally` จะทำงานต่อเสมอ

ผลลัพธ์ที่คาดหวังเชิงตรรกะ:

```text
Something went wrong!
Process finished.
```

หมายเหตุ:

ไฟล์นี้ใช้ `console.error()` ใน `.catch()` และ `console.log()` ใน `.finally()` บาง terminal อาจแสดงลำดับข้อความต่างกันเล็กน้อย เพราะ `stdout` กับ `stderr` เป็นคนละ stream แต่ลำดับการทำงานของโค้ดยังคือ `catch` ก่อน `finally`

## ไฟล์ `promises_02.js`

ในไฟล์นี้มีบรรทัดสำคัญ:

```js
const status = true;
```

เพราะ `status` เป็น `true` จึงเข้าเงื่อนไขนี้:

```js
resolve("Operation ran successfully!");
```

ลำดับการทำงาน:

1. สร้าง Promise
2. ตรวจค่า `status`
3. ค่าเป็น `true`
4. Promise กลายเป็น `fulfilled`
5. เข้า `.then()`
6. จากนั้นเข้า `.finally()`

ผลลัพธ์:

```text
Operation ran successfully!
Process finished.
```

## ไฟล์ `promise_03.js`

ไฟล์นี้ต่างจาก 01-02 ตรงที่เริ่มจำลองงาน async จริงด้วย `setTimeout()`

โค้ดหลัก:

```js
function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("Access granted");
      } else {
        reject("Access denied");
      }
    }, 5000);
  });
}
```

แนวคิดสำคัญ:

- เราสร้างฟังก์ชัน `checkAge(age)` ขึ้นมาเอง
- ฟังก์ชันนี้ `return` กลับเป็น Promise
- ใช้ `setTimeout(..., 5000)` เพื่อจำลองการรอ 5 วินาที
- หลังครบเวลา จึงค่อยตัดสินใจว่าจะ `resolve` หรือ `reject`

เงื่อนไขของไฟล์นี้:

```js
checkAge(20);
```

เพราะส่งค่า `20` เข้ามา และ `20 >= 18` จึงเกิด:

```js
resolve("Access granted");
```

ลำดับการทำงาน:

1. เรียก `checkAge(20)`
2. ได้ Promise กลับมา
3. Promise อยู่สถานะ `pending` ระหว่างรอ 5 วินาที
4. ครบเวลาแล้วตรวจว่าอายุถึง 18 หรือไม่
5. เนื่องจากอายุ 20 จึง `resolve`
6. เข้า `.then()` และแสดงผล

ผลลัพธ์:

```text
Access granted
```

ถ้าเปลี่ยนเป็น:

```js
checkAge(15);
```

ก็จะเข้า `reject("Access denied")` และไปทำงานที่ `.catch()`

## เปรียบเทียบทั้งสามไฟล์

| ไฟล์             | เงื่อนไขหลัก                | สถานะ Promise               | เมธอดที่ทำงาน             | ผลลัพธ์หลัก                   |
| ---------------- | --------------------------- | --------------------------- | ------------------------- | ----------------------------- |
| `promises_01.js` | `status = false`            | `rejected`                  | `.catch()`                | แจ้งข้อผิดพลาด                |
| `promises_02.js` | `status = true`             | `fulfilled`                 | `.then()`                 | แจ้งว่าสำเร็จ                 |
| `promise_03.js`  | `age >= 18` หลังรอ 5 วินาที | `fulfilled` หรือ `rejected` | `.then()` หรือ `.catch()` | อนุญาตหรือปฏิเสธการเข้าใช้งาน |

สิ่งที่เหมือนกัน:

- ทั้งสามไฟล์สร้าง Promise เพื่อจัดการผลลัพธ์ที่อาจสำเร็จหรือล้มเหลว
- ทั้งสามไฟล์ใช้ `.then()` และ `.catch()` เพื่อรับผลลัพธ์
- ทั้งสามไฟล์มีแนวคิดเดียวกันคือ ตัดสินใจว่าจะ `resolve` หรือ `reject`

สิ่งที่ต่างกัน:

- ต่างกันที่ค่า `status`
- ค่า `status` เป็นตัวกำหนดว่าจะไปทางสำเร็จหรือทางผิดพลาด
- ไฟล์ `promise_03.js` ใช้ฟังก์ชันและ `setTimeout()` เพื่อจำลองงาน async จริงมากขึ้น
- ไฟล์ `promise_03.js` รับค่าจาก parameter คือ `age` ไม่ได้ใช้ตัวแปร `status` แบบตรง ๆ
- เฉพาะ `promises_01.js` และ `promises_02.js` ที่มี `.finally()`

## สรุปสั้น ๆ

- ถ้า Promise สำเร็จ จะไปที่ `.then()`
- ถ้า Promise ล้มเหลว จะไปที่ `.catch()`
- ไม่ว่าจะทางไหน `.finally()` จะทำงานเสมอ
- ในตัวอย่างนี้ `status` คือจุดตัดสินใจสำคัญที่สุด
- ใน `promise_03.js` จุดตัดสินใจเปลี่ยนจาก `status` เป็นเงื่อนไข `age >= 18`

## จำแบบง่าย

```text
resolve -> then
reject  -> catch
ถ้ามี finally -> ทำงานตอนท้ายเสมอ
```

## ข้อสังเกตเพิ่มเติม

- ใน `promises_02.js` มีคำว่า `Pemding` ในคอมเมนต์ ซึ่งควรสะกดเป็น `Pending`
- `promises_01.js` และ `promises_02.js` ยังเป็น Promise แบบ synchronous example คือเช็กค่าแล้วตัดสินใจทันที ยังไม่ได้มี `setTimeout`, `fetch`, หรือ async งานจริง
- `promise_03.js` เป็นตัวอย่างที่ใกล้เคียง async จริงกว่า เพราะมีช่วงเวลารอและตัดสินใจภายหลัง
- `promise_03.js` ยังไม่มี `.finally()` แต่สามารถเพิ่มได้ถ้าต้องการให้มีโค้ดที่ทำงานปิดท้ายเสมอ

## บทสรุปสุดท้าย

สามไฟล์นี้ช่วยให้เห็นพัฒนาการของ Promise เป็นลำดับ:

- `promises_01.js` สอนกรณี "ล้มเหลว"
- `promises_02.js` สอนกรณี "สำเร็จ"
- `promise_03.js` สอนการสร้าง Promise ของเราเองเพื่อใช้กับ async logic

ถ้าเข้าใจทั้งสามไฟล์นี้แล้ว จะต่อยอดไปเรื่อง `fetch()`, `async/await`, และการจัดการ async ในชีวิตจริงได้ง่ายขึ้นมาก
