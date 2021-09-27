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
// var x : unknown;
// x = 100;
// if(x === 100) {
//     var num : number = x;
// }
// console.log(typeof x);
// undefined type
// Public - Accessible everywhere
// Private - Accessible within Class
// Protected - Self and inherited classes
// class Student{
//     // private firstName : string;
//     // private lastName : string;
//     age : number;
//     courses : string[];
//     constructor(private firstName : string, private lastName : string, age : number){
//         // this.firstName = firstName;
//         // this.lastName = lastName;
//         this.age = age;
//         this.courses = ["Angular - Awesome framework", "React- Great Library"]
//     }
//     getFullName(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// var foo = new Student("Foo", "Bar", 32)
// console.log(foo.getFullName())
// Classes have their own types
// class Foo{
//     email! : string;
//     constructor(email : string){
//         this.email = email
//     }
// }
// class Bar {
// }
// class Bam{
//     constructor(private foo : Foo, private bar : Bar){}
//     getEmail(){
//         return this.foo.email;
//     }
// }
// new Bam(new Foo("test@test.com"), new Bar());
// type Username = {
//     email : string;
// };
// type Student = Username & {
//     age : number;
// }
// let foo : Student = {
//     age : 32,
//     email : "Test@test.com"
// }
// class XYZ implements Username{
// }
// interface Human {
//     firstName : string;
//     lastName : string;
//     getFullName() : void;
// }
// interface User extends Human{
//     email : string;
// }
// class Person implements User {
//     constructor(public email : string, public firstName : string, public lastName : string){
//     }
//     getFullName(): void {
//         console.log(this.firstName + " " + this.lastName)
//     }
// }
// var foo = new Person("foo@test.com", "Foo", "Bar");
// foo.getFullName();
var Student = /** @class */ (function () {
    function Student(email) {
        this.email = email;
        this.ctr = 0;
    }
    Student.getName = function () {
        console.log(Student.firstName);
    };
    Student.prototype.getEmail = function () {
        Student.counter++;
        this.ctr++;
        return this.email + " : " + Student.counter + " : " + this.ctr;
    };
    Student.firstName = "Foo";
    Student.counter = 0;
    return Student;
}());
var foo = new Student("foo@test.com");
console.log(foo.getEmail());
var bar = new Student("bar@test.com");
console.log(bar.getEmail());
