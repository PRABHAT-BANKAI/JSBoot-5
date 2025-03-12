//Closures
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

function outerFun() {
  let a = 5;
  let b = 10;
  function innerFunction() {
    // let c = 10;
    return a + b; // lexical environment
  }

  a = 10;
  b = 20;
  // console.log(c);
  return innerFunction;
}

const innerFun = outerFun();

console.log(innerFun());
