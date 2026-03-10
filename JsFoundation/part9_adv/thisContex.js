// Bind
const person = {
    name: 'Rayhan',
    greet: function () {
         console.log(`hey my name is ${this.name}`);
         
    }
}

// person.greet()
let anotherPerson = person.greet.bind({name:'sifat'})
// anotherPerson()

// call
// note: This become person and city become argument
function greet(city) {
    console.log(`hello i am ${this.name} i am from ${city}`);
}

let Person = {
    name: 'rayhan'
}
// greet.call(person,'dhaka')

// apply
// note: apply is as same as call() but apply() takes argument in array

function User(city,country) {
    console.log(`my name is ${this.name} and i lived in ${city} which is localted in ${country}`);
}

let newUser= {
  name: 'rayhan'
}
User.apply(person,['dhaka','bangladesh']) 

