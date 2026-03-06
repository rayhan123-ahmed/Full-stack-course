let computer = {cpu:12}
let lenovo = {screen: "HD",
    __proto : computer
 }
let hardWare = {}


// console.log(lenovo.__proto);

let genaricCar = {tyrs : 4}
let tesla = {drivers: 'Ai'}

Object.setPrototypeOf(tesla,genaricCar)

// console.log(tesla.tyrs);

