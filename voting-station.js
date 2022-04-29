const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

function chooseStations(stations) {
  const newArr = [];
  for (let i = 0; i < stations.length; i++) {
    if (
      stations[i][1] > 19 &&
      (stations[i][2] === "school" || stations[i][2] === "community centre")
    ) {
      newArr.push(stations[i][0]);
    }
  }
  return newArr;
}

console.log(chooseStations(stations));
