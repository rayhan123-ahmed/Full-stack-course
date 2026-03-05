// number 1
let teas = ['green tea','black tea','chai','oolonog tea']
let slectedTea = []

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  slectedTea.push(teas[i]);
}
// console.log(slectedTea);

// number 2
let cities = ['London','paris','barlin','dhaka']
let visitedCities = []

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === 'paris') {
        continue
    }
    visitedCities.push(cities[i])
}
// console.log(visitedCities);

// Number 4
let numbers = ['1','2','3','4','5','6']
let smallNumber = []

for (const number of numbers) {
    if (number === '4') {
        break
    }
    smallNumber.push(number)
}
// console.log(smallNumber);

// number 5
let teaTypes = ["green tea", "black tea", "chai", "oolonog tea"];
let preferdTea = []

for (const tea of teaTypes) {
    if (tea === "black tea") {
        continue
    }
    preferdTea.push(tea)
}

// console.log(preferdTea);

// number 6
let citiesPopulation = {
    'London': 89000,
    'New york': 90000,
    'Paris': 154000,
    'Barlin': 18780
}
let cityNewPopulation = {}

for (const city in citiesPopulation) {
    if (city === "Barlin") {
        break
    }
    cityNewPopulation[city] = citiesPopulation[city]
}
// console.log(cityNewPopulation);

// number 7

/*let worldCities = {
    'sydney': 5000000,
    'barlin': 3500000,
    'tokyo': 200000,
    'paris': 2200000
}
let largCities = {}

for (const city in worldCities) {
    if (worldCities[city] < 3000000) {
        continue
    }
    largCities[city] = worldCities[city]
} */
// console.log(largCities);

// number 8
let teaCollection = ["green tea", "black tea", "chai", "oolonog tea"];
let availbleTea = []

teaCollection.forEach((tea)=>{
    if (tea === 'chai') {
        return
    }
    availbleTea.push(tea)
})
// console.log(availbleTea);

// number 9
let myWorldCities = ["London", "paris", 'sydney', "barlin", "dhaka"];
let travelCities = []

myWorldCities.forEach((city)=>{
    if (city === "sydney") {
        return
    }
    travelCities.push(city)
})
// console.log(travelCities);

// number 10
 let myNumbers = ['2','5','7','9']
 let doubleNumbers = []

 for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] === '7') {
        continue;
    }
    doubleNumbers.push(myNumbers[i]*2)
 }
//  console.log(doubleNumbers);
 
// Number 11
let myTeas = ["green tea", "black tea", "chai", "oolonog tea"];
let shortTeas = [];

for (const tea of myTeas) {
    if (tea.length > 10) {
        break
    }
    shortTeas.push(tea)
}
console.log(shortTeas);
