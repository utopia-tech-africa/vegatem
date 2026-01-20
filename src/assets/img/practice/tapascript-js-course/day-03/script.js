// Day 03 Tasks

// 1.

let num = 3;

if (num % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// 2.

let age = 18;

if (age >= 18) {
  console.log("You are eligible to drive");
} else {
  console.log("You are not eligible to drive");
}

// 3.

const salary = 12300 * 12;
const bonus = (20 / 100) * salary;
const ctc = salary + bonus;
console.log(ctc);

//  4.

const color = "green";

if (color === "Red" || color === "red") {
  console.log("STOP");
} else if (color === "Green" || color === "green") {
  console.log("GO");
} else {
  console.log("error identified");
}

// 5.

// approach 1

// let dailyUnits = 11;
// let unitCost = 150;
// let monthsDays = 30;
// const monthlyCost = dailyUnits * unitCost * monthsDays;
// console.log("Monthly cost", monthlyCost);
// const yearlyCost = dailyUnits * unitCost * monthsDays * 12;
// console.log("Yearly cost", yearlyCost);
// const discount = (20 / 100) * yearlyCost;
// console.log("Discount", discount);
// const totalYearlyCost = yearlyCost - discount;
// console.log("Annual Cost", totalYearlyCost);

// approach 2

// let dailyUnits, unitCost, monthsDays;

if (((dailyUnits = 11), (unitCost = 150), (monthsDays = 30))) {
  console.log("Monthly Cost", dailyUnits * unitCost * monthsDays);
  const yearlyCost = dailyUnits * unitCost * monthsDays * 12;
  const discount = (20 / 100) * yearlyCost;
  console.log("Total Yearly Cost", yearlyCost - discount);
}

//  6

const year = 2024;

const leapYear = console.log(year % 2 === 0 ? "Leap year" : "Not leap year");

// 7

const p = 2;
const q = 17;
const r = 15;

if (p >= q && p >= r) {
  console.log("P is the maximum");
} else if (q >= r && q >= p) {
  console.log("q is the maximum");
} else {
  console.log("r is the maximum");
}
