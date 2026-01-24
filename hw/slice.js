// slice() is used to extract a portion of an array and return it as a new array.
//Syntax:array.slice(startindex,endindex)start include,end not include
const arr=[10,20,30,40,50]
const result=arr.slice(1,3)
console.log(result)

//slice for start
const arr2=["A","B","C","D"]
const result1=arr2.slice(0,2)
console.log(result1)

//slice with one argument
const arr1=[1,2,3,4,5,6]
const result3=arr1.slice(3)
console.log(result3)

//Negative index
const arr4=[100,200,300,400]
console.log(arr4.slice(-2))

const arr5=["D","i","k","s","h"]
console.log(arr.slice(2,3))

// Does NOT change original array
//Returns a new array