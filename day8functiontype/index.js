// Function with four ways
// Recursion
// Nested Functions

// variables as a Function expression
// arrow Function

// normal function
// variable function
// arrow function
// anonymous function

// console.log(sum(1, 2));

// variable function cannot get before initialization
let sum = function (a, b) {
  return a + b;
}; // anonymous function

let store = sum(12, 5);
console.log(store);

// arrow function
//syntax

//  ()=>{}

let subtract = (a, b) => a - b;

console.log(subtract(55, 2));

//5
//4
//3
//2
//1

function order(num) {
  if (num == 0) {
    return;
  }
  console.log(num);

  order(num - 1);
}

order(5);

// nested Function
function outerFun() {
  // functional scope
  console.log("outer function");

  function innerFun() {
    console.log("inner function");
  }

  return innerFun;
}

// outerFun();

let storeInner = outerFun();

storeInner();



// IIFE(Immediately Invoked Function Expression )

(function () {
  console.log("IIFE");
})();


// Closure concepts will continue tomorrow 


// revision
console.log("10"+5)
console.log("1,2,3"== [1,2,3])//.join()


let string = [1,2,3]

string = string.join("+")
console.log(string)

let  number= +"12345679"
console.log( number )

console.log(123 + +"1234")
