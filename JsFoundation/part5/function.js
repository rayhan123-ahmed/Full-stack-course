// Number 1

/* function makeTea(typeOfTea) {
    return `making ${typeOfTea}`
}
let orderTea = makeTea('green tea'); */

// console.log(orderTea);

// number 2
 function orderTea(teaType) {
    function confirmOrder() {
        return `order confirmed for ${teaType}`
    }
    return confirmOrder()
 }
 let orderConfirmation = orderTea("green tea");

//  console.log(orderConfirmation);

// number 3
 const calculateTotal = (price,quantity)=>{
    return price * quantity
 }

 let totalcost = calculateTotal(20,20);

//  console.log(totalcost);
 
 
