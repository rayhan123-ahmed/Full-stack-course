/* function Person(name,age) {
    this.name = name;
    this.age = age;
 } */

/* function Car(make,model) {
    this.make = make
    this.model = model
 }

 let myCar = new Car('tesla','version 4')
 let newUser = new Person('rifat','21') */

//  console.log(myCar);
//  console.log(newUser);

function Tea(type) {
    this.type = type

    this.describe = function () {
        return `this is cup of ${this.type}`
    }
}
 
let leamoneTea = new Tea('lemon tea')
// console.log(leamoneTea);

function Animals(species) {
    this.species = species;
}

Animals.prototype.sound = function () {
    return `${this.species} make a sound`
}

let dog = new Animals('dog')
let cat = new Animals('cat')

// console.log(dog.sound());
// console.log(cat.sound());

function Drink(name) {
    if (!new.target) {
        throw new Error('new kyword must be add when you add drink ')
    }
    this.name = name
}

let mojo = new Drink('mojo')
let coke = new Drink('coke')