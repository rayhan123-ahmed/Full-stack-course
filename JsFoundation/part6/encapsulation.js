// Encapsulation
class Bankaccount {
    #ballance = 0

    deposit(){
        this.#ballance += amount
    }

    getBallance(){
        return `$ ${this.#ballance}`
    }
}

let newAccount = new Bankaccount()

// console.log(newAccount.getBallance());
