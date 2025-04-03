// console.log(1);
// let loading = true


// try {
//   console.log(2);


// } catch (error) {
 
// }finally{
//   console.log("Finally block executed");
//   loading = false;
// }
// console.log(3);
// console.log(4);



function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Parameter is not a number!");
  }
}

try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // Expected output: Error: Parameter is not a number!
}
console.log(isNaN("1"))