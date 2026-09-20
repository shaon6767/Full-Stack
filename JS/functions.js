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

// const cache = {};

// function square(n) {
//   if (n in cache) {
//     return cache[n];
//   }

//   const result = n * n;
//   cache[n] = result;
//   console.log(n * n === cache[n]);

//   return result;
// }

// // leak: the listener keeps 'bigData' reachable forever,
// // even after the button is removed from the page
// function attachHandler() {
//   const bigData = new Array(1_000_000).fill('x');
//   button.addEventListener('click', () => {
//     console.log(bigData.length);   // closure keeps bigData alive
//   });
// }

// // fixed: remove the listener when you're done with it
// function attachHandlerSafe() {
//   const bigData = new Array(1_000_000).fill('x');
//   function onClick() { console.log(bigData.length); }
//   button.addEventListener('click', onClick);
//   return () => button.removeEventListener('click', onClick);   // cleanup
// }

// ✅ With prototype — ONE shared copy
// function User(name) { this.name = name; }
// User.prototype.greet = function() { return this.name; };

// const u1 = new User("A");
// const u2 = new User("B");
// u1.greet === u2.greet; // true ← SAME function, shared! 💾 saved!

// ✅ With constructors — instanceof check
// const user = { name: "Alice", role: "admin" };
// const product = { name: "Laptop", role: "electronics" };

// function User(name) { this.name = name; }
// function Product(name) { this.name = name; }

// const u = new User("Alice");
// const p = new Product("Laptop");

// u instanceof User;    // true ✅
// u instanceof Product; // false ✅
// p instanceof Product; // true ✅

// ✅ With constructors — prototype chain

// const admin = { name: "A", role: "admin", canDelete: true };
// const user = { name: "B", role: "user" };
// function User(name) {
//     this.name = name;
// }
// User.prototype.greet = function() {
//     return `Hi, I'm ${this.name}`;
// };

// function Admin(name) {
//   User.call(this, name); // inherit properties
//   this.canDelete = true;
// }
// Admin.prototype = Object.create(User.prototype); // inherit methods

// const a = new Admin("Alice");
// a.greet(); // "Hi, I'm Alice" <= inherited from User!
// a.canDelete; // true ← own property

//Basic Constructor
//Constructor names start with CAPITAL letter

// function Car(make, model, year) {
//   this.make = make;      // assign to new object
//   this.model = model;
//   this.year = year;
// }

// const myCar = new Car("Toyota", "Camry", 2024);
// console.log(myCar);
// // Car { make: "Toyota", model: "Camry", year: 2024 }

// console.log(myCar instanceof Car); // true
// console.log(myCar.constructor === Car); // true

// function Car(make, model) {
//   if (!(this instanceof Car)) {
//     return new Car(make, model); // auto-fix!
//   }
//   this.make = make;
//   this.model = model;
// }

//Prototype
// function User(name, email) {
//   this.name = name;
//   this.email = email;
// }

// // Shared methods (ONE copy in memory, shared by ALL instances)
// User.prototype.greet = function () {
//   return `Hi, I'm ${this.name} (${this.email})`;
// };
// User.prototype.changeName = function (newName) {
//   this.name = newName;
// };

// const u1 = new User("Alice", "alice@test.com");
// const u2 = new User("Bob", "bob@test.com");

// u1.greet(); // "Hi, I'm Alice (alice@test.com)"
// u2.greet(); // "Hi, I'm Bob (bob@test.com)"

// u1.greet === u2.greet; // true

// No constructor, no `new`, just pure prototype
// const userProto = {
//   greet() {
//     return console.log(`Hi, I'm ${this.name}`);
//   },
//   changeName(newName) {
//     this.name = newName;
//   },
// };

// const user = Object.create(userProto);
// user.name = "shawn";
// user.email = "shawn@test.com";

// user.greet();

// // Check the chain:
// Object.getPrototypeOf(user) === userProto; // true
