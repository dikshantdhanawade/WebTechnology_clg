//Activit 1:declare array string fun obj

const fruits=["mango","banana","orange"]
console.log(fruits)

//obj
const person={
    firstname:"Dikshant",
    lastname:"Dhanawade",
    age:20
}
console.log("Name:"+person.firstname)

//String
let name="haris is good gamer"
console.log(name)
console.log(name.length)

//fun
function add(a,b){
    return a+b;
}
let sum1=add(10,20)
let sum2=add(20,50)
console.log(sum1)
console.log(sum2)

//Activity 2:count ovel in string 

function countvowel(sentence){
    let count=0
    const vowel="aeiouAEIOU"
    for(i=0;i<=sentence.length;i++){
        if(vowel.includes(sentence[i])){
            count++;
        }
    }
    return count
}
console.log("Number of vowel:"+countvowel("hello world"))

//Activity 3:reverse string

function reversestring (str){
let reverse="";
for(let i=str.length -1;i>=0;i--){
    reverse +=str[i]
}
return reverse
}
console.log(reversestring("hello"))

//Activit 4:find largest element in array

let arr = [5, 12,200, 130, 100];
let largest = Math.max(...arr);

console.log(largest); 

//Activity 5:find missing element in array
function findMissing(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

let arr1 = [1, 2, 4, 5];
console.log(findMissing(arr1, 5)); 

//Activity 6:check palindrome in string 
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}


console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 

