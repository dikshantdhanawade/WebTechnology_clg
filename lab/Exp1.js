//Activity 1:Const can change be block of scope
const a=10;
console.log(a); 
{
const a=20;
document.write(a+"<br>")
console.log(a); 
}



//Activity 2- let var
var x=10;
document.write(x+"<br>")
console.log(x);

let z=30;
document.write(z+"<br>")
console.log(z);

var x=10;
let b=20;
{
    var x=15;
    let b=30;
    document.write(x+"<br>")
    console.log(x);//15
    document.write(b+"<br>")
    console.log(b);//30
}
document.write(x);
console.log(x);//15
document.write(b+"<br>")
console.log(b);//20

//Activity 3:Student Info

const firstname="Dikshant"
const lastname="Dhanawade"
var age=20;
document.write("Student Info: <br> ")
console.log("Student Info:")
document.write("Name:"+firstname + " " +lastname+"<br>" )
console.log("Name:"+firstname + " " +lastname)
document.write("age:"+age+"<br>")
console.log("age:"+age)

//Activity 4:Even or odd
var n=10;
if(n % 2==0)
{
    document.write("number is even<br>")
    console.log("number is even")
}
else
{
    document.write("number is odd<br>")
    console.log("number is odd")
}

//Activity 5:check Student pass or fail
const mark=70;
if(mark>35){
    document.write("Student Pass:<br>")
    console.log("Student Pass")
}
else{
    document.write("Student is fail<br>")
    console.log("Student is fail")
}

//Activity 6:print number using loop
for(i=1;i<=10;i++){
    document.write(i+"<br>")
    console.log(i)
}
