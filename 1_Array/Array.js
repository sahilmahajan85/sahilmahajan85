const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "doga"]

console.log(myArr[1]);

// Array methods
myArr.push(6)
console.log(myArr);
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9);
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newarr = myArr.join() // converts array into string
console.log(newarr);

//slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);

const marvel = ["thor", "spiderman", "ironman"]
const dc = ["superman", "flash", "batman"]
//marvel.push(dc) 
//console.log(marvel);

// combines two array 
const m1= marvel.concat(dc) 
console.log(m1);

const m2= [...marvel,...dc]
console.log(m2);

const another = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real = another.flat(Infinity)
console.log(real);

// to convert in array
console.log (Array.from("sahil"))

let s1= 100
let s2 =200
let s3 = 300
console.log(Array.of(s1,s2,s3));

