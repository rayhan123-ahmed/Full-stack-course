function person(name) {
    this.name = name
}

person.prototype.greet = function () {
    console.log(`hey i am ${this.name}`);
}

let NewUser = new person('rayhan ahmed')
NewUser.greet()
// console.log(NewUser);
