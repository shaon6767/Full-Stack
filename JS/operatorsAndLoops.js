// let a = 3;
// let b = ++a;
// console.log(b);

// let a = 3;
// let b = a++;
// console.log(b);

// let a = 5;
// let b = a++;
// console.log(b);
// console.log(a)

// let counter = 0;
// let c = counter++;
// console.log(counter);
// console.log(c);

// let counter = 2;
// let b = 2 * counter++; //counter = 2
// console.log(b); //4
// console.log(counter); //3
// let c = 2 * ++counter; //counter = 4
// console.log(c); //8
// console.log(counter); // counter = 5??

// for (a = 3, b = 2, c = a * b; c < 10; c++) {
//   console.log(c) // 6 7 8 9
// }

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(a, x); // 4 5

// console.log(null);
//  let v = typeof null
//  console.log(v)

// <----Logical Operators--->

// let hour = 12;

// if (hour > 10 || hour < 10) {
//   console.log("hour is less than 10");
// } else {
//   console.log("hour remains");
// }

// console.log(1 && 2 && null && 0 && 3); // null
// console.log(1 && undefined && 0); // undefined
// console.log(1 && 0); // 0
// console.log(1 && 1 && 0); // 0

// let hour = 20;

// if (hour > 10) {
//   console.log("hour is gone");
// } else if (hour === 10 || (hour && 10) || hour < 10) {
//   console.log("hour remains");
// }

// console.log("hour" && 10);

// <---- LOOPS ---->

// let i = 4;
// while (i) {
//   i--;
//   console.log(i);
// }

// let i = 0; // <-- number > 4 = infinite loop
// while (i > 4) {
//   i++;
//   console.log(i);
// }

// let i = 1;
// while (i = 3) {
//   i++;
//   console.log(i);
// }

// let i = 1;
// while (i <= 3) {
//   i++;
//   console.log(i);
// }

//🔁 for loop

// for (begin; condition; step) {
//   // ... loop body ...
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// let i = 0;
// for (; i < 3; ) i++;
// console.log(i); //3

// for (let i = 0; i < 3; i++) {
//   console.log(i); // 0 1 2
// }

// for (let i = 1; i < 6; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i < 8; i++) {
//   if (i % 2 == 0) continue;
//   console.log(i);
// }

// for (let i = 2; i < 8; i++) {
//   if (i % 2) console.log(i);
// }

//using forEach

// const numbers = [1, 2, 3];

// const copy = [];

// numbers.forEach((num) => {
//   copy.push(num);
// });

// console.log(copy); // [1, 2, 3]

//using map

// const copy = numbers.map((num) => num);
//map() automatically creates and returns the new array.