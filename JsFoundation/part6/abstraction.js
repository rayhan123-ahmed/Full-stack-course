// abstraction

class CoffeMachine {
    start(){
        // call DB
        // filler value
        return `Strarting the machine`
    }

    brewCoffe(){
        // complex calcution
        return `making the coffe`
    }

    coffeReady(){
      let procces1 =  this.start();
      let procces2 = this.brewCoffe();
       return `${procces1} and ${procces2}`
    }
}

let myCoffe = new CoffeMachine()
console.log(myCoffe.coffeReady());
