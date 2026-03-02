//Activity 1: Array, Object, String, Function

const fruits = ["mango","banana","orange"];
document.write(fruits + "<br>");
console.log(fruits);

// Object
const person = {
    firstname: "Dikshant",
    lastname: "Dhanawade",
    age: 20
};

document.write(person.firstname + "<br>");
console.log("Name: " + person.firstname);

// String
let name = "haris is good gamer";
document.write(name + "<br>");
console.log(name);
document.write("Length: " + name.length + "<br>");
console.log(name.length);

// Function
function add(a,b){
    return a+b;
}

let sum1 = add(10,20);
let sum2 = add(20,50);

document.write(sum1 + "<br>");
document.write(sum2 + "<br>");
console.log(sum1);
console.log(sum2);


//Activity 2: Count vowels

function countvowel(sentence){
    let count = 0;
    const vowel = "aeiouAEIOU";

    for(let i=0; i < sentence.length; i++){
        if(vowel.includes(sentence[i])){
            count++;
        }
    }
    return count;
}

document.write("Vowels: " + countvowel("hello world") + "<br>");
console.log("Number of vowels: " + countvowel("hello world"));


//Activity 3: Reverse String

function reversestring(str){
    let reverse = "";
    for(let i=str.length-1; i>=0; i--){
        reverse += str[i];
    }
    return reverse;
}

document.write(reversestring("hello") + "<br>");
console.log(reversestring("hello"));


//Activity 4: Largest Element

let arr = [5, 12, 200, 130, 100];
let largest = Math.max(...arr);

document.write(largest + "<br>");
console.log(largest);


//Activity 5: Find Missing Number

function findMissing(arr, n){
    let expectedSum = (n*(n+1))/2;
    let actualSum = 0;

    for(let i=0; i<arr.length; i++){
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

let arr1 = [1,2,4,5];

document.write(findMissing(arr1,5) + "<br>");
console.log(findMissing(arr1,5));


//Activity 6: Palindrome

function isPalindrome(str){
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

document.write(isPalindrome("madam") + "<br>");
document.write(isPalindrome("hello") + "<br>");

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));