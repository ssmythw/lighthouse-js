const moves = ["north", "north", "west", "west", "north", "east", "north"];

function finalPosition(moves) {
  let final = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "east":
        final[0]++;
        break;

      case "west":
        final[0]--;
        break;

      case "north":
        final[1]++;
        break;

      case "south":
        final[1]--;
        break;
    }
  }
  return final;
}

console.log(finalPosition(moves));
