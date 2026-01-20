//  What is a Function?
// A function is a block of reusable code that performs a specific task.
// Instead of writing the same code again and again, we define a function once and call it whenever needed.

// JavaScript functions are first-class objects, meaning:
// They can be stored in variables
// Passed as arguments
// Returned from another function

//1.simple fun(no parameters)

function message(){
    console.log("hello word")
}
message()

//2.function with parameter

function student(name,age){
    console.log("Name:",name)
    console.log("age:",age)
}
student("Dikshant",20)