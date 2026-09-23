//try catch

//basic

// try {
//   const data = JSON.parse("invalid json{{{");
//   console.log(data);
// } catch (err) {
//   console.log("Parsing failed:", err.message);
// }
// console.log("App still running!");

// try {
//   throw new Error("Something is wrong");
// } catch (err) {
//   console.log(err.name); //error name
//   console.log(err.message); //error message
//   console.log(err.stack); //both
// }

//custom errors using class

// class NotFoundError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "NotFoundError";
//   }
// }

// try {
//     throw new NotFoundError("This file is not found")
// } catch (err) {
//     console.log(err.message)
// }

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// try {
//     throw new ValidationError("This is not validated")
// } catch (err) {
//     console.log(err.message)
// }

// class NetworkingError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "NetworkingError";
//   }
// }

// try {
//     throw new Error ("Networking Problem")
// } catch (err) {
//    console.log(err.message)
// }

// class HttpError extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.name = "HttpError";
//     this.statusCode = statusCode;  // ← extra property!
//   }
// }

// try {
//   throw new HttpError("Not Found", 404);
// } catch (err) {
//   console.log(err.message);
//   console.log(err.statusCode);
// }

//basic async-await

// async function getUser() {
//   const response = await fetch("/api/user");
//   const user = await response.json();
//   return user;
// }

// getUser().then(user => console.log(user));

// async function display() {
//   const user = await getUser();
//   console.log(user);
// }

// class ApiError extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.name = "ApiError";
//     this.statusCode = statusCode;
//   }
// }

// async function apiRequest(url) {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new ApiError(
//         `Request failed: ${response.statusText}`,
//         response.status
//       );
//     }

//     return await response.json();
//   } catch (err) {
//     if (err instanceof ApiError) {
//       throw err;  // re-throw known errors
//     }
//     // Wrap unknown errors
//     throw new ApiError(`Network error: ${err.message}`, 0);
//   }
// }

// // Usage
// async function loadUser(id) {
//   try {
//     return await apiRequest(`/api/users/${id}`);
//   } catch (err) {
//     if (err instanceof ApiError && err.statusCode === 404) {
//       return null;  // user doesn't exist
//     }
//     throw err;  // let caller handle
//   }
// }

// async function asyncOne() {
//   return "hi";
// }
// console.log(asyncOne()); // //Promise { 'hi' }

// async function run() {
// return await Promise.resolve("This is a Promise");
// }
// console.log(run()); // Promise { <pending> }

// async function run() {
//   return await Promise.resolve("This is a Promise");
// }

// run().then(response => {
//   console.log(response);
// });  // This is a Promise (sucessfull promise)

// async function test() {
//   console.log("A");

//   await console.log("B");

//   console.log("C");
// }

// test();

// console.log("D");

// async function getData() {
//   console.log("Start");
  
//   let response = await fetch("https://api.example.com/data");
//   // ⬆️ JavaScript PAUSES here. It waits for the internet to respond.
//   // This could take 1 second, 5 seconds, who knows.
  
//   let data = await response.json();
//   // ⬆️ Pauses again until the data is fully read.
  
//   console.log(data);
//   console.log("Done");
// }

//without .then/ await

// let response = fetch("https://api.example.com/data");
// console.log(response);  // Promise { <pending> } ← data is NOT ready yet!