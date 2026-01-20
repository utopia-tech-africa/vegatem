function myVote() {
  let voteable;
  let age = Number(document.getElementById("input").value);
  console.log(age);
  if (isNaN(age)) {
    voteable = "Input is not a number";
    console.log(voteable);
  } else {
    voteable = age >= 18 ? "Old enough to vote" : "Too young!";
    console.log(voteable);

    document.getElementById("demo").innerHTML = voteable;
  }
}

const button = document.getElementById("button");
button.addEventListener("click", myVote);

function greeting() {
  if (new Date().getHours() < 18) {
    console.log("Good day");
  } else {
    console.log("Good evening");
  }
}

greeting();

// let day;
let date = new Date().getDay();

switch (date) {
  case 1:
    day = "Monday";
    console.log("Today is Monday");
    break;
  case 2:
    day = "Tuesday";
    console.log("Today is Tuesday");
    break;
  default:
    console.log("It's the weekend");
}

const cars = ["saab", "volvo", "pickup"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
let text = "this is an array";
console.log(text.split(" ")[2]);
