//1.sync
//Code runs line by line.
// JavaScript waits for each task to finish before moving to the next line.

console.log("Start");

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 3));
console.log("End");

// 2.Async
// When a task takes time (API call, file read, database, timer),
// JavaScript does NOT wait.
// It moves to next line.

console.log("Start");

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

console.log("End");

//Activity 1: guess o/p

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");



console.log("Start");

function wait() {
  for (let i = 0; i < 1000000000; i++) {}
}

wait();
console.log("End");

// | Feature  | Synchronous     | Asynchronous      |
// | -------- | --------------- | ----------------- |
// | Waiting  | Yes             | No                |
// | Behavior | Blocking        | Non-blocking      |
// | Example  | Normal function | setTimeout, fetch |
// | Use case | Calculations    | API, DB, file     |

// Where Sync is Used:
// Simple calculations
// Data validation
// Small logic
// Mathematical operations

// Simple Real-Life Example
//  Making Tea:
// Sync → Wait for water to boil before doing anything.
// Async → Start boiling water and meanwhile cut vegetables.
