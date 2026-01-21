const superheros=["spiderman","ionman","batman"]
const hero=["hulk"]

superheros.push(hero)
console.log(superheros)

console.log(superheros[3])
console.log(superheros[3][2])

//array concat
const arr=superheros.concat(hero)//add array element 
console.log(arr)

const arr1=[1,2,3,[4,5,6],7,8,[6,7,[4,5]]]//nested array
console.log(arr1)

const arr2=arr1.flat(Infinity)//flateen all levels no matters how deep
console.log(arr2)

const arr3=arr1.flat(1)
console.log(arr3)//how be nested array shiold flated degault value is 1

//flat does not chnage original array it return new array 

//data scripting using this method
console.log(Array.isArray("Dikshant"))//check given vlue array or not

console.log(Array.from("dikshant"))//convert an itrretible object like string same map and into an itreative array

// console.log(Array.from(name:"Dikshant"))

console.log(Object.keys({name:"Dikshant"}))

let score1=100
let score2=200
let score3=50//create value given value no matter how many
//diffrence between arrayof-convert value,arra

//Activity:
//string
//array





