// function first(gainegers) {
//   console.log(typeof gainegers);
// }
// first("helo");
// console.log("hlw");
// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//     console.log(i);
//   }
// }

// showPrimes(30)

// function sum(a, b, c, ...n) {
//   return a + b + c + n[0] + n[1];
// }
// console.log(sum(1, 2, 3, 4, 5));

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// const counter = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2

// function greet(name) {
//   console.log("Hello " + name);
// }

// const sayHello = greet("Shawn");

// sayHello();

// function greet(name) {
//   console.log("Hello " + name);
// }

// const sayHello = greet("Shawn");

// sayHello();

// function outer() {
//   console.log(arguments);

//   const inner = () => {
//     console.log(arguments); //arrow function doesnt have arguments, even if u take them it will show the outer one
//   };

//   inner(9,10); //argument taken but didnt work
// }

// outer(10, 20);

// function outer() {
//   console.log(arguments);

//   const inner = (...args) => {
//     console.log(args); // but you can take rest parameters as arguments
//   };

//   inner(9,10); // now it worked
// }

// outer(10, 20);

// const user = {
//   name: "Shawn",
//   friends: ["ali", "rifat"],

//   greet() {
//     console.log("hi, " + this.name);
//   },

//   listGood() {
//     this.friends.forEach((f) => {
//       console.log(this.name + " knows " + f); // works
//     });
//   },

//   listBad() {
//     this.friends.forEach(function (f) {
//       console.log(this.name + " knows " + f); // this is undefined
//     });
//   },

//   broken: () => console.log(this.name),
// };

// const loose = user.greet;
// loose();
// const fixed = user.greet.bind(user);
// fixed();

// let x = 5;
// [1, 2].forEach((n) => {console.log(n)});
// console.log(x);

// for (var i = 0; i < 3; i++) {
//   console.log(i);
// }

// console.log(typeof function () {});

// let i = 1;
// const arr = ['a', 'b', 'c'];
// // console.log(arr[i++]);
// console.log(arr[i++]);

// const arr = ['apple','banana','mango']

// for (const array of Object.entries(arr)) {
//   console.log(array);
// }

// const user = ["Shawn", "Dhaka"];
// for (const key in user) {
//   console.log(key, user[key]);
// }

// const nums = [519];
// let newNum = [...nums.toString()];
// console.log(newNum);

// const MathUtils = (function () {
//   let callCount = 0; // private
//   return {
//     add(a, b) {
//       callCount++;
//       return a + b;
//     },
//     getCallCount() {
//       return callCount;
//     },
//   };
// })();

// console.log(MathUtils.add(1, 2));
// console.log(MathUtils.getCallCount());

// FUNCTIONS ARE OBJECTS

// function calculateTotal(price, tax) {
//   return price + tax;
// }
// console.log(calculateTotal.name);
// console.log(calculateTotal.length);

// const id = setInterval(() => console.log("done"), 1000);
// setTimeout(() => clearInterval(id), 8000);

// const id = setInterval(() => console.log("happend"), 3000);
// setTimeout(() => clearInterval(id),9000);
