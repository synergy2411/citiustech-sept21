// Generic Class

class Animal<T,U>{
    private legs : T;
    private species : U;
    constructor(legs : T, species : U){
        this.legs = legs;
        this.species = species;
    }
    display(){
        console.log(`Legs : ${this.legs}`)
        console.log(`Species : ${this.species}`)
    }
}

const tiger = new Animal<number, string>(4, "Tiger")
tiger.display();



class Person{
    firstName : string;
    lastName : string;
    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Contraints

function displayPerson<T extends Person>(person : T){
    console.log(`Full Name : ${person.firstName} ${person.lastName}!`)
}

let per = new Person("Foo","Bar");

displayPerson(per)