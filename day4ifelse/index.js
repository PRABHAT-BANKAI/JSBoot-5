// if Statement
// if else Statement
// Nested if else Statement
// min, ,max
// With Console and With Inner- HTML

//"",'',``
if (5 > 3) {
  console.log("5 is greater than3");
}

let number = 55;

if (number > 25) {
  console.log(number + "is greater than 25");
  console.log(`Number ${number} is greater than 25`);
}

if (false == "false") {
  console.log("This condition is true");
} else {
  console.log("This condition is false");
}

// let inputValue = prompt()

let value = 35;

if (value % 2 == 0) {
  console.log(value + " is even");
} else {
  console.log(value + " is odd");
}

let email = "asdf@gmail.com";
let password = 12345;

if (email == "asdf@gmail.com" && password == "1234") {
  console.log("Login Successful");
} else {
  console.log("Invalid Credentials");
}

// Math.floor;
// Math.ceil;
// Math.round;
// Math.sqrt(16);
// Math.max(12, 3, 4, 5, 6, 7);

let min = Math.min(12, 3, 4, 5, 6, 7);

if (email == "asdf@gmail.com") {
  if (password == "1234") {
    console.log(" Login succesfully");
  } else {
    console.log("Invalid Password");
  }
} else {
  console.log("Invalid Email");
}

let a = 10;
let b = 10;
let c = 10;

if (a > b) {
  if (a > c) {
    console.log(a + " is the largest number");
  } else {
    console.log(c + " is the largest number");
  }
} else {
  if (b > c) {
    console.log(b + " is the largest number");
  } else {
    console.log(c + " is the largest number");
  }
}

// let str = "hellojavascript"

if (66 > true) {
  console.log("This condition is true");
}
if (false == false) {
  console.log("This condition is true");
} else {
  console.log("This condition is false");
}


let numbers = Number("abc1234")
console.log( typeof numbers)
