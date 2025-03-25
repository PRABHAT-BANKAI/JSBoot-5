// ,slice
//
// ARRAY METHODS
// map
//  ,filter, foreach, indexof, findindex ,includes,

// var number = 12
// {
//   console.log(number)
//   var number = 12345
//   console.log(number)
// }

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// slice can be used in array and string also
// slice cannot changes in original array
let sliceStore = array.slice(1, 4); //in first argument have starting index and second argument have ending index
console.log(sliceStore);
console.log(array);

let string = "helloworld";
let result = string.slice(0, 5);

console.log(result);

// High order function (hof)// hof is a function where i passing a callback  a function as argument
// A higher-order function is a function that does one of the following:
// Takes another function as an argument.
// Returns another function as its result.

let products = ["adidas", "nike", "jorden", "puma", "rebook"];

// map is  a example of HOF

//map
// 1step create new array by own
// 2step updated new array
// 3 return new array

let resultData = products.map((item) => {
  return item + " shoes";
});

console.log(resultData);

let array2 = [
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  5,
  6,
  6,
  6,
  ,
  7,
  7,
  7,
  55,
  888,
  888,
];

// filter
// 1step create new array by own
// 2step return  on condition which is true
// 3 return new array

let filterData = array2.filter((item) => item < 50);

console.log(filterData);

// forEach

let sum = 0;

let array3 = [10, 20, 30, 40, 50, 60];

let storeForEach = array3.forEach((element) => {
  sum += element;
});

console.log(storeForEach);

console.log(sum);

// indexOf
let getIndex = array3.indexOf(400);

console.log(getIndex);

// callback function
// A callback is a function passed as an argument to another function

let findIndex = array3.findIndex((item) => item > 20);
// in findIndex  which element find first then it will be returned with index number
console.log(findIndex);

let nameOfArray = ["batman", "superman", "spiderman", "ironman"];

let findBoolean = nameOfArray.includes("spidrman");

console.log(findBoolean);

let str2 = "hellofromjavscript";

let strBoolean = str2.includes("from");

console.log(strBoolean);

// every,
let employeeOfArray = ["johndoe", "smith", "harry", "potter", "jinwo"];

// some
