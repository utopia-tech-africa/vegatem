// function as expression
let PrintMe = function () {
  console.log("print me");
};
PrintMe();

// parameters & arguments
function sum(a, b) {
  const result = a + b;
  console.log(result);
}
sum(2, 4);

// return statements
function substract(a, b) {
  const result = b - a;
  return result;
}

// passing a function as an argument
const retSubtract = substract(4, 8);
console.log(retSubtract);

function double(x) {
  return 2 * x;
}
console.log(double(retSubtract));

//  returns outer then inner cause both are invoked
function outerFunction() {
  console.log("outer function");

  function innerFunction() {
    console.log("inner function");
  }
  innerFunction();
}

// default parameters
function multiply(a, b = 3) {
  return 2 * (a + b);
}
console.log(multiply(2));

// overriding the default

function calc(a, b = 3) {
  return 2 * (a + b);
}
console.log(calc(4, 5));

// rest parameter
function restParameter(a, b, c, ...rest) {
  console.log(a, b, c, rest);
}
restParameter(1, 2, 3, 4, 5, 6, 7, 8);

// picking an index in the array created
function restParameterArray(a, b, c, ...rest) {
  console.log(a, b, c, rest[2]);
}
restParameterArray(1, 2, 3, 4, 5, 6, 7, 8);

// nested function

// returning the function code itself

function outerFunction() {
  console.log("outer function");

  return function innerFunction() {
    console.log("inner function");
  };
}
let returnFunc = outerFunction();
console.log(returnFunc);

// invoking inner inside outer

function outer() {
  console.log("outer function");

  function inner() {
    console.log("inner function");
  }
  inner();
}
console.log(outer());

// executes the code inside outer and inner
function outerFunction() {
  console.log("outer function");

  return function innerFunction() {
    console.log("inner function");
  };
}

let retFunc = outerFunction();
console.log(retFunc());

// callback function

function mainFunction(callbackFunction) {
  console.log("main function!");

  callbackFunction();
}

console.log(
  mainFunction(function () {
    console.log("callback function!");
  })
);

//  alternative

function mainFunction(callbackFunction) {
  console.log("main function!");

  callbackFunction();
}

const returnMainFunc = mainFunction(function () {
  console.log("callback function");
});
console.log(returnMainFunc);

// pure function - output = input

let greetingMsg = "hello ";

function greeting(name) {
  return greetingMsg + name;
}
console.log(greeting("afia"));
console.log(greeting("afia"));
console.log(greeting("afia"));

// impure / side effects

function greeting2(name) {
  return greetingMsg + name;
}

console.log(greeting2("ama"));
console.log(greeting2("ama"));
console.log(greeting2("ama"));

greetingMsg = "Hola ";

console.log(greeting2("adwoa"));
console.log(greeting2("adwoa"));

// higher order function (compare with callback): takes a function as an argument or returns a function or both

// returning a function
function higherOrderFunc() {
  return function () {
    console.log("higher order function!");
  };
}

const returnHigherOrder = higherOrderFunc();
console.log(returnHigherOrder());

// taking a function as an argument

function greeting3(name) {
  return "hello " + name;
}

function higherOrderAsArgument(funct, name) {
  return funct(name);
}

console.log(higherOrderAsArgument(greeting3, "moses"));

// immediately invoked function expression

(function () {
  console.log("IIFE!");
})();

(function (count) {
  console.log("IIFE!", count);
})(1);

// function execution stack (call stack)

function f1(name) {
  console.log("this is function 1! ", name);
}

function f2() {
  console.log("this is function 2!");
}

function f3() {
  console.log("this is function 3");
  f2(f1("lawson"));
}

f3();

// recurssion: when a function calls itself

// function foo() {
//   foo();
// }

function recurssion(count) {
  console.log("fetching water...", count);
  if (count === 0) {
    console.log("no more water!");
    return;
  }

  recurssion(count - 1);
}
console.log(recurssion(5));

// const toCallCallbackFunction = true;

// function mainFunction(callbackFunction) {
//   console.log("main function!");
//   if (toCallCallbackFunction) {
//     callbackFunction();
//   }
// }

// const call = function () {
//   console.log("callback function!");
// };

// console.log(call());
