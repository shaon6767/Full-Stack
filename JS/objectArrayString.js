// let obj = new Object(); // constructor method
// console.log(obj)

// let obj = {} // object literal

// let obj = {
//   name: "helo",
//   age: "69",
// };
// console.log(obj);

// let obj1 = {
//   name: "hello",
//   age: "690",
//   "is dying": true,
// };
// console.log(obj1);

// let obj = {
//   name: "nice",
//   age: "200",
//   "likes tea": true,
// };
// console.log("name" in obj);
// console.log("likes tea" in obj);

// let user = {
//   name: "John",
//   age: "35",
//   color: "white",
//   "fav food": "beer",
// };

// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// let user = {
//   name: "John",
//   age: "35",
// };

// let clone = {};  // cloning method
// for (let keys in user) {
//   clone[keys] = user[keys];
// }
// console.log(clone);

// let clone = Object.assign({}, user); // cloning method
// console.log(clone); // cloned obj

// there are also a method called structuredClone().This method can clone most data types, such as objects, arrays, primitive values.

// function hello() {
//   console.log(this.name);
// }
// hello();

// let user = {
//   name: "helo",
// };

// user.sayHelo = function () {
//   console.log(this.name);
// };

// user.sayHelo();

// function User(name) {
//   this.name = name;
//   this.age = 23;
// }

// let user = new User("Jack");

// console.log(user.name);

// let obj = new Object();
// console.log(obj);

// let arr = new Array();
// console.log(arr);

// let fn = new Function();
// console.log(fn);

// class Name {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let obj1 = new Name("Shawn", 20);
// console.log(obj1);

// let obj2 = new Name("Mike", 26);
// console.log(obj2);

// function Obj(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let newObj = new Obj("shawn", 26);
// console.log(newObj);

// function User() {
//   this.name = "John";
// }

// console.log(new User().name);

// function UserTwo() {
//   this.name = "Mike";
//   return { name: "Jake" };
// }

// console.log(new UserTwo());

