// Number 1

/* function makeTea(typeOfTea) {
    return `making ${typeOfTea}`
}
let orderTea = makeTea('green tea'); */

// console.log(orderTea);

// number 2
/* function orderTea(teaType) {
    function confirmOrder() {
        return `order confirmed for ${teaType}`
    }
    return confirmOrder()
 }
 let orderConfirmation = orderTea("green tea"); */

//  console.log(orderConfirmation);

// number 3
/* const calculateTotal = (price,quantity)=>{
    return price * quantity
 }

 let totalcost = calculateTotal(20,20); */

//  console.log(totalcost);
 
// number 4

/*function makeTea(typeOfTea) {
    return `make Tea: ${typeOfTea}`;
}

function processOrder(teaFunction) {
  return teaFunction("green tea");
}
 let order = processOrder(makeTea); */

//  console.log(order);
 
// number 5
function creatTeaMaker(name) {
    return function (teaType) {
        return `${name} making ${teaType}`
    };
}

let teaMaker = creatTeaMaker('rayhan')
let result = teaMaker('green tea');
console.log(result);
