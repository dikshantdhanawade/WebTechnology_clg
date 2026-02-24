//code execute line by line
//each task wait to privious task to finish before it can start
//js in 
//execute code line by line
console.log("start")
function add(a,b){
    return a+b;

}
let r=add(5,3)
console.log(r)
console.log("end")

//usync :sum task take time like api call ,file read,databse and timmer
//js does not wait,it move to next line,not talking behaviour
//use: fetching data,reading file,set timeout,
console.log("start")
setTimeout(()=>{
    console.log("Inside Timeout")

},2000)

//set timeout is usyn it wait 2 sec meanwhile js is wit after 2 sec

//Activity 1:
//guess the o/p game
//blocking and non blocking ,ex
//real time use where is use sync 
//api fetch
