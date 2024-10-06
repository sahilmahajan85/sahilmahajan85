function myName(){
    console.log("Sahil mahajan")
}
//myName()
function add(num1, num2){
    console.log(num1+num2);
}
//add(3,4)

function add2(num1,num2){
    //let result = num1+num2
   // return result
   return num1+num2
}
//const result = add(3,4)
//console.log("result: ", result);

function login(username){
    return `${username} just logged in`
}
//console.log(login("Sahil"))

//rest operator in function
function cal(...num1){
    return num1
}
//console.log(cal(200,300,500,2000))

function cal(val1,val2,...num1){
    return num1
} // output will be 500,2000 as val1 will take 200 and val2 will take 300
//console.log(cal(200,300,500,2000))

const user={
    username:"Sahil",
    price: 199 
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}//handleObject(user)

//arrow function
const addTwo= (num1, num2) => {
    return num1+num2
}
// or used as this also
//const addTwo = (num1,num2) => num1+num2
console.log(addTwo(3,4))