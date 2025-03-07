// for (initialize; condition; inc, dec) {
//   // code block
//   //excute
// }

// for(let i= 1;i<=10;i++){
//   console.log(i);
// }

// let initializer = function
// while(first condition check){
//   // code block
//  // 2nd enter in while loop
// //  3rd inc dec
// }

// let number = 10;

// while (number > 0) {
//   number--;
//   console.log(number);
// }

// let value = 0;
// do {
//   value++;
//   console.log(value);

// } while (value <= 10);

// for(let i=1;i<=100;i++){
//   if(i%2==0){
//     console.log(`${i} is even`);
//   }else{
//     console.log(`${i} is odd`);
//   }
// }

let number = 12;

let count = 0;

if (number == 1) {
  console.log(`${number} is co prime number`);
  return;
}
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    count++;
  }
}

console.log(count);

if (count == 2) {
  console.log(`${number} is a prime number`);
} else {
  console.log(`${number} is not a prime number`);
}


