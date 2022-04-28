// const raining = true;
// let cold = true;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }
// if (cold) {
//   console.log("Make sure you wear a scarf!");
// }
// console.log("Now you're ready to go outside!");

//------------------------

// cold = false;

// if (cold) {
//   console.log("Wear a scarf!");
// } else {
//   console.log("Short sleeves are fine!");
// }

//-------------------------
// const temperature = -12;

// if (temperature < 0) {
//   console.log("Make sure to pick out a scarf!");
// } else if (temperature < 15) {
//   console.log("Short sleeves won't cut it!");
// } else {
//   console.log("Short sleeves are fine");
// }

//-------------------------

const isCitizen = true;
const age = 26;
const temperature = 55;
const raining = false;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside is not a good idea!");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}
