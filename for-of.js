const amounts = [61.0, 52.25, 112.99, 5.0];
let total = 0;
// Looping method 1 - simple for loop

for (let i = 0; i < amounts.length; i++) {
  total = total + amounts[i];
}
console.log("The order total is: " + total);

let total2 = 0;

for (let amount of amounts) {
  total2 += amount;
}

console.log("The order total is: " + total2);
