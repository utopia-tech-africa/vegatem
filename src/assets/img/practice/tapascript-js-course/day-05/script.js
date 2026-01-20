// For loop: specified number of iterations
// While loop: non-specified
// Do while: will iterate at least once before checking the condition

// For loop

// for (initialization of variable; check condition; update variable) {code}

// for (let count = 1; count <= 5; count++) {
//   console.log("Looping", count);
// }

// e.g. 1

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     // console.log("Even Numbers", i);
//     sum = sum += i;
//   }
// }

// console.log("Even Numbers Summed:", sum);

// // e.g. 2

// let language = "Javascript";

// for (let i = 0; i < language.length; i++) {
//   console.log(language.charAt(i));
// }

// // Nested loop - for multi-dimensional data

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log("Row", i, "Col", j);
//   }
// }

// // Break - exit the loop

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) break;
//   console.log(i);
// }

// // Continue - skip a specific iteration and continue

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// // Multiple counters for a single loop

// for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
//   console.log(i, j);
// }

// Printing pyramid-like numbers

// for (let i = 1; i <= 5; i++) {
//   let line = "";
//   for (let j = 1; j <= 5; j++) {
//     console.log((line += j));
//   }
// }

// // while
// let counter = 1;
// while (counter <= 5) {
//   console.log("while", counter);
//   counter++;
// }

// // do while

// let num = 1;

// do {
//   console.log("do-while", num);
//   num++;
// } while (num <= 5);

// Tasks

// 1.

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let star = 1; star <= 5; star++) {
    console.log((row += "* "));
  }
}

// //  2.

let num = 3;

for (let i = 1; i <= 10; i++) {
  let product = num * i;
  console.log(`${num} * ${i} = ${product}`);
}

// // 3.

let summed = 0;

for (let i = 1; i <= 500; i++) {
  if (i % 2 === 1) {
    summed += i;
  }
}

console.log(summed);

// 4.

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}
