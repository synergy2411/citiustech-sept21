// Generic Class
var Animal = /** @class */ (function () {
    function Animal(legs, species) {
        this.legs = legs;
        this.species = species;
    }
    Animal.prototype.display = function () {
        console.log("Legs : " + this.legs);
        console.log("Species : " + this.species);
    };
    return Animal;
}());
var tiger = new Animal(4, "Tiger");
tiger.display();
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
