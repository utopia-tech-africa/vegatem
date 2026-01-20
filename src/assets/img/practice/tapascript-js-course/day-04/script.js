// controlled flow in programming
// if, else, else if, switch

let day = 1;

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

let name = "tapascript";

switch (name) {
  case "tapascript":
    console.log("this is tapascript");
    break;
  case "bytegrad":
    console.log("this is bytegrad");
    break;
  default:
    console.log("you are neither bytegrad nor tapascript");
}

let city = "Madina";

switch (city) {
  case "Accra":
  case "Sunyani":
  case "Cape Coast":
  case "Tamale":
    console.log("These are all capital cities");
    break;
  case "Madina":
  default:
    console.log("This is a neighborhood in Accra");
}

let item = "orange";

switch (item) {
  case "pencil":
    break;
  case "orange":
  case "banana":
  case "apple":
    console.log("all these are fruits");
    break;
  case "pen":
  default:
    console.log("this is stationery");
}

// Tasks

//  1.
// "It's a normal day"

//  2.

let amount = 200;

amount % 100 === 0
  ? console.log("withdrawal successful")
  : console.log("invalid amount");

// 3.

let operator = "/";
const a = 8;
const b = 5;

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "/":
    console.log(a / b);
    break;
  case "*":
    console.log(a * b);
    break;
  default:
    console.log("invalid operator");
}

//  4.

let age2 = 17;

if (age2 < 18) {
  console.log(`Price is $${3}`);
} else if (age2 >= 18 && age2 <= 60) {
  console.log(`Price is $${10}`);
} else {
  console.log(`Price is $${8}`);
}

// 5.

let month = "march";

switch (month) {
  case "january":
  case "february":
    console.log("Aquarius");
    break;
  case "february":
  case "march":
    console.log("Pisces");
    break;
}

// 6.

const x = 20;
const y = 90;
const z = 90;

if (x === y && y === z) {
  console.log("Equilateral triangle");
} else if ((x === y && x !== z) || (y === z && z !== x)) {
  console.log("Iscosceles triangle");
} else if (x !== y && y !== z && x !== z) {
  console.log("Scalene trianlge");
}
