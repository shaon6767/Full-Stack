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

// let user = {};
// console.log(user?.name?.age?.color); //undefined instead of error

// let user = {
//   name: "John",
// };

// let id = Symbol("id");

// user[id] = 1;

// console.log(user[id]);

// <-----Strings----->

// let str = `Hellow`;

// console.log(str[0]);
// console.log(str.at(0));
// console.log(str.at(-1));
// console.log(str.indexOf("o"));

// let a = "I love tea";
// console.log(a.indexOf("tea"));
// console.log(a.includes("a",3))
// console.log("tea".includes("a",3))

// let str = "hellow";

// console.log(str.slice(0, 3));

// let str1 = "shawn";
// console.log(str1.slice(2, 3));

// <---Array--->

// let fruits = ["mango", "apple", "banana"];
// console.log(fruits.length);
// console.log(fruits[fruits.length - 1]);
// console.log(fruits.at(-1));

// let arr = [1, 2, 3, 4, 5];
// for (let array of arr) {
//   console.log(array);
//   console.log(arr);
// }

// let arr = ["apple", "banana", "mango", "tea"];
// arr.splice(0, 0, "I", "Love");
// // console.log(arr);

// arr.forEach((i) => {
//   arr.push(i + "nigas");
// });
// console.log(arr);

// let user = [
//   { id: 1, name: "John", age: 20 },
//   { id: 2, name: "Mike", age: 23 },
//   { id: 3, name: "Kyle", age: 26 },
// ];

// let filterUser = user.filter((item) => item.id < 3);
// console.log(filterUser);

// let arr = [1, 29, 16, 7, 9];
// arr.sort();
// console.log(arr);
// arr.sort((a, b) => a - b);
// console.log(arr);
// arr.sort((a, b) => b - a);
// console.log(arr);

// let str = "I got tea";
// let arr = str.split(' ');
// console.log(arr);

// let fruits = ["apple", "apple", "mango", "apple"];

// let count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(count)

// let fruits = ["apple", "apple", "mango", "apple"];

// let count = fruits.reduceRight((acc, i) => {
//   acc[i] = (acc[i] || 0) + 1;
//   return acc;
// }, {});

// console.log(count)

/* //iterate
let range = {
  from: 1,
  to: 5,
};
range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};
for (let result of range) {
  console.log(result);
}
*/

// let recipeMap = new Map([
//   ["cucumber", 500],
//   ["tomatoes", 350],
//   ["onion", 50],
// ]);
// for (let keys of recipeMap.keys()) {
//   console.log(keys);
// }
// for (let pairs of recipeMap.entries()) {
//   console.log(pairs);
// }
// for (let value of recipeMap.values()) {
//   console.log(value);
// }

// let obj = {
//   name: "John",
//   age: 30,
// };
// let map = new Map(Object.entries(obj));
// console.log(map);
// console.log(obj);

// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);
// console.log(prices)

// let map = new Map();
// map.set("shawn", 25);
// console.log(map);

// let obj = Object.fromEntries(map)
// console.log(obj)

// const user = {
//   name: "Shawn",
//   age: 26
// };

// let u = Object.entries(user);
// console.log(u)
// console.log(typeof u)

//array destructuring
// let arr = [1,2]
// let [first,last] = arr
// console.log(first)
// console.log(last)

//object destructuring
// let user = {
//   name: "Mike",
//   age: 28,
// };
// let { name, age } = user;
// console.log(name);
// console.log(age);


