// var x : number;
// x = 100;
// var y : string ;
// var z : boolean;
// var xyz : string[] = ["Apple", "Orange", "Banana"];
// var numbers : number[] = [1,2,3,4,5];
// // Tuple
// var mixValues : [string, number]  = ["Foo", 32]
// mixValues[0].indexOf('o')
// mixValues[1]
// console.log(typeof mixValues);
// var x : any;
// x = 100;
// console.log(typeof x);
// x = "Some String";
// console.log(typeof x);              // ?
// x = true;
// console.log(typeof x);
// enums
// enum Colors {
//     Red,
//     Grren,
//     Blue
// }
// var myColor : Colors = Colors.Blue
// Union
// let username : string | number = "Username";
// username = 100;
// Alias for Type
// type User = {
//     firstName : string,
//     lastName : string;
//     age : number;
//     greet() : void;
// } 
// interface Person {
//     firstName : string,
//     lastName : string;
//     age : number;
//     greet() : void;
// }
// var user : User = {
//     firstName : "Foo",
//     lastName : "BAr",
//     age : 32,
//     greet : function(){console.log("Hello There!")}
// }
// var users : Person[] = [{
//     firstName : "Foo",
//     lastName : "BAr",
//     age : 32,
//     greet : function(){console.log("Hello There!")}
// }]
// var x : any;
// x = "";
// x = 100;
// x = true;
// Type inference
// var str  = "Some string values";
// str = 100;
// Unknown type
var x;
x = 100;
if (x === 100) {
    var num = x;
}
console.log(typeof x);
// undefined type
