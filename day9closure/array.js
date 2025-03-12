// array store multiple data types in a single variable
//Push ,Pop, shift, upshifts, Splice, map
//  ,filter, foreach, indexof, findindex ,includes, every, some
let arr = ["hello", 1, false, undefined, "1234", null];

let array = [];

array.push("one");
// push method add in last of array
const result = array.push("two");

array.push("three");

console.log(array);

const popValue = array.pop();
console.log(result);

console.log(popValue);
console.log(array);

let arr2 = [1, 2, 3, 4, 5, 6, 7];

// shift method remove  first element in array
const shiftValue = arr2.shift();

console.log(shiftValue);
// unshift method add element in starting of array
arr2.unshift("batman");
console.log(arr2);

// interview intrested question splice and slice

const basket = ["apple", "orange", "grapes", "guava", "pineapple"];

// splice method changed original array also

const storebasket = basket.splice(2, 0,"melon"); // first argument  for starting index 2nd argument for how many remove elements
console.log(basket);
console.log(storebasket, "splicebasket");


//slice
