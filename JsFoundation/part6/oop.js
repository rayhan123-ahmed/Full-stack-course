let car = {
    make: 'toyota',
    model: 'defander',
    year: 2022,
    start : function () {
        return `${this.make} car got started in ${this.year}`
    }
}

// console.log(car.start());

function Animal(type) {
    this.type = type
}

Animal.prototype.sound = function () {
    return `${this.type} makes a sound`
}

let dog = new Animal('dog')

// console.log(dog.sound());


Array.prototype.name = function () {
    return `custom method ${this} `
}

let newArray = [1,3,5,]
// console.log(newArray.name());

class Vehicale {
    constructor(make,model,){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.make} car from ${this.model}`
    }
}

class Car extends Vehicale {
    drive(){
        return `${this.make} example of inheritance`
    }
}

let newCar = new Car('corolla','tata')
let myNewCar = new Car('civic','tata')

console.log(newCar.start());
console.log(myNewCar.drive());


