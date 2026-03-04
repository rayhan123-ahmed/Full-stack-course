// Number 1 
// let sum = 0
// let i = 1

// while (i <= 5) {
//     sum+=i
//     i++
// }
// console.log(sum);

// number 2
    // let countdwon = [];
    // let a = 5;

    // while (a > 0) {
    //     countdwon.push(a);
    //     a--
    // }
// console.log(countdwon);

// number 3
// let teaCollection = []
// let tea;

//     do {
//         // tea = prompt(`Enter your favourite tea (type "stop" to finished)`)
        
//         if (tea !== "stop") {
//             teaCollection.push(tea)
//         }

//     } while (tea !== 'stop');

    /* Ask user to enter password
    Keep asking until password is "admin123"
    When correct → print "Access Granted" */
    
    // let passwordFile = [];
    // let password;

    // do {
     //   password = prompt(`Enter correct password`);

    //   if (password !== "admin123") {
    //     passwordFile.push(password);
    //   }
    // } while (password !== "admin123");

// number 4
//  let total = 0
//  let count = 1

//  do {
//     total+= count
//     count++
//  } while (count <= 3);

// number 5
//  let multipliedNumbers = [];
//  let numbers = [2,4,6]
//     for (let i = 0; i < numbers.length; i++) {
//         const number = numbers[i] * 2;
//         multipliedNumbers.push(number)
//     }

// console.log(multipliedNumbers);

// number 6

let cities = ['paris','new york','london','tokyo']
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  const element = cities[i];
  cityList.shift(element)
}
 console.log(cityList);
 