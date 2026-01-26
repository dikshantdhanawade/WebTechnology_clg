let now = new Date();

// Used for:
// Age calculation
// Reports
// Dashboards

console.log(now.getFullYear()) // 2026
console.log(now.getMonth())  // 0-11
console.log(now.getDate())   // day
console.log(now.getDay())   // 0-6 (Sun-Sat)

//Time Methods
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())    

// Timestamps (VERY IMPORTANT)
//  What is timestamp?
// Number of milliseconds since 1 Jan 1970
console.log(Date.now())// 1700000000000+


let start = Date.now();

// some task
let end = Date.now();

console.log(end - start + " ms");
