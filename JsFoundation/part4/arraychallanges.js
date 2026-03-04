// number 1
let teaFlavors  =  ['green tea','black tea','oolong tea']

let firstTea = teaFlavors[0]
// console.log(firstTea);
// number 2
let cities  =  ['tokiyo','paris','new work']

let favCity = cities[2];
// console.log(favCity);

// number 3
let teaTypes = ['herbal tea', 'white tea', ' masala chai']

teaTypes[1] = 'jasmine tea'
// console.log(teaTypes);

// number 4
let visitedCity = ['dhaka','new work']

visitedCity.push('berlin')
// console.log(visitedCity);

// number 5

let teaOrders = ['chai','iced tea','macha']
const lastOrder = teaOrders.pop()
// console.log(teaOrders);

//  number 6

let popularTea = ["herbal tea", "white tea", " masala chai"];
let softCopy = popularTea

// console.log(popularTea);
// console.log(softCopy);

// number 7

let topCities = ["tokiyo", "paris", "new work"];
let hardCopy = [...topCities]
hardCopy.pop();

// console.log(topCities);
// console.log(hardCopy);

// number 8

let europeanCity = ['paris','italy']
let asianCity = ['bangldesh','nepal']
const worldCity = europeanCity.concat(asianCity)

// console.log(worldCity);

// number 9
let teaMenu = ["cha", "green tea", "herbal tea", "white tea", " masala chai"];
const menuLength = teaMenu.length

// console.log(menuLength);

// number 10

let cityBucketList = ['tokyo','london','cape twon']
 const isLondinInList = cityBucketList.includes('london')

 console.log(isLondinInList);
 
