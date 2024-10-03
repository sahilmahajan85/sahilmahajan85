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
*/
console.log(typeof age);
console.log(typeof undefined); // output is (undefined)
console.log(typeof null); // output is (object)

let score = 33

let inNumber = Number(score)
console.log(inNumber);