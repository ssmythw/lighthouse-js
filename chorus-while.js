const chorus = "Let's party";
let repeat = 0;

while (repeat < 10) {
  console.log(chorus);
  if (repeat === 5) {
    console.log("Change key");
  }
  repeat++;
}

console.log("Until the sun comes up");
