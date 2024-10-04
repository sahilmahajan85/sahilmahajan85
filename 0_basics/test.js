const accountId = 1513251 // cannot be changed once assigned  
let accountEmail ="mahajan.sd@gmail.com" // can be changed
var accountPassword = "12345" // cannot used nowadays 
accountCity = "jaipur" // it makes a default var
let accountState; 

accountEmail ="sahilmahajan@gmail.com" 
 accountPassword = "1111"
accountCity = "Goa"

console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

// automatic datatype identifier
let name = "sahil"
let age = 18
let isLoggined = false 

/*
premative datatypes -

numbers => 2 to power 53
 big int
 string=> ""
 boolean => true / false
 null => standalone value
 undefined =>
    symbol=> unique


non premitive data type 

array
objects
function

*/
console.log(typeof age);
console.log(typeof undefined); // output is (undefined)
console.log(typeof null); // output is (object)

let score = "33"

let inNumber = Number(score)
console.log(inNumber);
console.log(typeof inNumber);

// arrays
const heros =["shaktiman", "ironman", "spiderman","doga"];
// object
let myObj = {
    name : "sahil",
    age: 31,
}
// function
const myfunction = function(){
    console.log("hello world");
}

// memory in js
// stack(premitive)  heap(non primitive)

//string
const surName = "Mahajan"
const repoCount = 50
console.log(`hello my surname is ${surName} and my reo count is${repoCount}`);

const newName = new String('sahil-mah-ajan')
console.log(newName[0]);
console.log(newName.__proto__);
console.log(newName.length);
console.log(newName.toUpperCase());  
console.log(newName.charAt(1));
console.log(newName.indexOf('h'));

const newString = newName.substring(0,4)
console.log(newString);

const anotherString = newName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    Mahajan    "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://orange-github-5g44r5475g642v4pq.github.dev/" 
console.log(url.replace('github','$'))
console.log(url.includes('github'))

console.log(newName.split('-'));

const balance=new Number(100)
console.log(balance.toString().length);

const num =23.8966
console.log(num.toPrecision(3));
  
console.log((Math.random()*10)+1);