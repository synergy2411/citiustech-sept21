// ES6 Features in TypeScript
// o let, const - Block scope variables
// function demo(arr : number[]){
//     if(arr.length > 2){
//         var LOAD = "LOADING"
//         console.log(FLASH);         // undefined | not run | 
//     }else{
//         var FLASH = "FLASHING"
//     }
// }
// demo([1,2,3,4,5])
// const USER :string = "";
// USER = "Bar";
// const Person = {
//     email : "test@test.com"
// }
// Person.email = "foo@test.com";
// Person = {
//     email : ""
// }
// const arr = [1,2,3,4,5];
// Impure Change
// arr.push(6);
// Pure Change
// arr = []
// o Arrow Functions -> Short syntax, Greater for one liners
// - With {}
// - Without {}
// - dont have 'this' keyword
// - dont have 'arguments' keyword
// - can't call with 'new' operator
// function Person(age){
//     this.age = age;
// }
// let foo1 = new Person(32)
// let x = 201;
// function a(){
//     function b(){
//         // let x = 301;
//         console.log(x)          // ?
//     }
//     b();
// }
// a();
// function display(arguments){}
// display("test@test.com", 32, true)
// let user = {
//     email : "foo@test.com",
//     age : 32,
//     getDetails : function(){
//         return () => this.email + " " + this.age
//         // let that = this;
//         // return function(){
//         //     return that.email + " " + that.age          // error
//         // }
//     }
// }
// let nestedfunc = user.getDetails()
// console.log(nestedfunc())          // ?
// let numbers = [1,2,3,4,5];
// const doubleArray = numbers.map(function(value ){
//     return value * 2;
// })
// const tripleArray = numbers.map( value => {
//     // function body
//     return value * 3
// })
// o Spread and Rest operators - ( ... )
// Rest - Creates the collection from the individual elements
// Spread - Creates the individual elements from the collection
// function display(email, age, ...params){
//     console.log(params[0]);            // 32
// }
// display("test@test.com", 32, true)
// display("test@test.com", 32)
// display("test@test.com")
// let arr = [3,4,5];
// let newArr = [1,2, arr, 6,7,8];         // [1,2,[3,4,5],6,7,8]
// let newArr1 = [1,2, ...arr, 6,7,8];         // [1,2,3,4,5,6,7,8]
// let obj = {
//     firstName : "Foo",
//     lastName : "Bar"
// }
// let newObj = {
//     ...obj,
//     firstName : "Baz",
//     age : 32
// }
// console.log(newObj);            // {  firstName : "Baz", lastName : "", age : 32 }
// Object.assign({}, source, [more source objects])
// o Array and object destructing
// Array is indexed/ ordered collection
// let fruits = ["Apple", "Grapes", "Guava", "Oranges"]
// let  [,, f3, f4, f5] = fruits;
// console.log(f5);            // undefined
// Objects are unordered collection, property names
// let user = {
//     email : "test@test.com",
//     age : 32,
//     isAdmin : true,
//     address : {
//         city : "Bengaluru",
//         street : "201 Main Road, Marathahalli"
//     }
// }
// let newUser = {
//     email : "test1@test.com",
//     age : 43
// }
// let { email : e1, age : a1 } = newUser;
// let {age, email, isAdmin, address : { street, city}} = user;
// // let {city, street} = user.address;
// console.log(age);           // 32
// let user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     address : {
//         city : "Bengaluru",
//         street : "201 Main Road, Marathahalli"
//     },
//     friends : ["Bam", "Baz"]
// }
// let {
//     firstName,
//     lastName,
//     address : {
//         city, 
//         street
//     },
//     friends : [f1, f2]
// } = user;
// let users = [
//     {email : "test@test.com", age : 32},
//     {email : "test1@test.com", age : 34},
//     {email : "test2@test.com", age : 36},
// ]
// let [
//     {email : e1, age : a1},
//     {email : e2, age : a2},
//     {email : e3, age : a3},
// ] = users;
// o Default Function params
// function demo(email = "default@test.com"){
//     console.log(email)
// }
// demo()              // default
// demo("Foo@test.com")        // foo@test.com
// Rest - will take number of parameters; should be last in argument list; works with function parameters
// Spread - works with collection; creates inidividual elements from collection.
// Template String Syntax - without ( + ), `` (back tick)
// - Multiline string
// - Embed varibles within string
// let username = "Foo";
// let str = `Hello from ${username},
// I'm 34 years old.
// `
// console.log(str)
