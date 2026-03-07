// getters and setters
//       get use like property not like funtion

/* class User {
    constructor(name){
      this.name = name
    }

    get UserName (){
        return this.name
    }
}
let user1 = new User('raihan') */

// console.log(user1.UserName);
//       setter is used to update a value.

class NewUser {
  constructor(name) {
    this.name = name;
  }
  set User(NewName) {
    this.name = NewName
  }
}

let user2 = new NewUser('raihan')
user2.User = 'bondhu'
// console.log(user2.name);

// setter and getter

class User {
    constructor(age){
        this.age = age
    }

    set userAge(value){
        if (value < 0) {
            console.log(`Age cannot be negative`);
        }else{
            this.age
        }
    }

    get userAge(){
       return this.age
    }
}

let user = new User(20)
user.userAge = -20

