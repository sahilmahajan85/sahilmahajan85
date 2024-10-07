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

//loops
// for of loop
const greetings = "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`)
}

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )