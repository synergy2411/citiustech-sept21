// Generic Class
// class Animal<T,U>{
//     private legs : T;
//     private species : U;
//     constructor(legs : T, species : U){
//         this.legs = legs;
//         this.species = species;
//     }
//     display(){
//         console.log(`Legs : ${this.legs}`)
//         console.log(`Species : ${this.species}`)
//     }
// }
// const tiger = new Animal<number, string>(4, "Tiger")
// tiger.display();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
// Contraints
function displayPerson(person) {
    console.log("Full Name : " + person.firstName + " " + person.lastName + "!");
}
var per = new Person("Foo", "Bar");
displayPerson(per);
