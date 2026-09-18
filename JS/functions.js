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

const user = {
  name: 'Shawn',
  friends: ['ali', 'rifat'],

  // rule 3: called as user.greet(), so this = user
  greet() {
    console.log('hi, ' + this.name);
  },

  // arrow inside a method: keeps the method's this
  listGood() {
    this.friends.forEach(f => {
      console.log(this.name + ' knows ' + f);   // works
    });
  },

  // normal function inside a method: rule 4 kicks in
  listBad() {
    this.friends.forEach(function (f) {
      console.log(this.name + ' knows ' + f);   // this is undefined
    });
  },

  // arrow AS the method: there is no outer object, so this is not user
  broken: () => console.log(this.name)          // undefined
};

const loose = user.greet;   // no dot anymore
loose();                    // rule 4: this is undefined -> TypeError
const fixed = user.greet.bind(user);
fixed();  

