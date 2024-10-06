const mySym = Symbol("key1")

const user ={
    name :"Sahil",
    "fullname": "sahil mahajan",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "sahil.mahajan@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday", "saturday"]
}
// to ways to access objects data
console.log(user.email)
console.log(user["email"])
console.log(user["fullname"])
console.log(user[mySym])

// to make changes 
user.email = "mahajan@gmail.com"// to freeze the object for not making any changes
//Object.freeze(user)
//user.email  = "sahil@gmail.com" // it will not be changed as the object is freezed
console.log(user);

user.greeting = function(){
    console.log("hello user");
}
user.greeting2 = function(){
    console.log(`hello user,${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());

const reg=  {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(reg.fullname.userfullname.firstname);


const obj1 = {1: "a",2:"b"}
const obj2 = {3: "a",4:"b"}
const obj3 = {5: "a",6:"b"}
// to combine objects
// const obj4 = {Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);

 // de-structure
const course = {
coursename:  "js in hindi ",
price:  "999 ",
couseInstructor: "hitesh "
}

const{courseInstructor: Instructor} = course
console.log(Instructor);