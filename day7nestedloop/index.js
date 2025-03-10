let num = 12;
num = 13;
num = "ironman";

// constant means you can initialize the value only first time
const userName = "batman";
// userName = "superman"

{
  // let and const are block scope

  console.log(num);
  console.log(userName);
}

{
  //global scope
  var global = "global variable";
  var global = "global";
}
console.log(global);

//functional scope

let count = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    count++;
  }
}

console.log(count);

console.log(-5 > -Infinity);

let array = [12, 98, 2, 100, 6, 7];

// const result = Math.max(12,98,2,100,6,7)

// console.log(result);

let max = -Infinity;

for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log(max);

//*
//**
//***
//****
//*****

for (let i = 0; i < 5; i++) {
  let pattern = "";
  for (let j = 0; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

//function is a block of code

// when you make with name "function" is called normal function
print();
function print() {
  console.log("Hello World");
}

print();

let a = 12;
let b = 5;
let c = 1;

const result3 = sum(a, b, c); // arguments
console.log(sum(55, 5, 1));
console.log(result3);

function sum(num1, num2, num3) {
  // parameters when you get parameters you will give name with your perpective
  // console.log(`a${num1} b${num2} c${num3}`);
  // console.log(a + b);

  return num1 + num2 + num3;
}


function temp(){}


console.log(temp());
