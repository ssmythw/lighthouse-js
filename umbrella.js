// Add a function close that toggles the isOpen value

var umbrella = {
  color: "pink",
  isOpen: true,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  close: function () {
    if (umbrella.isOpen === true) {
      umbrella.isOpen = false;
      return "Closed the umbrella";
    } else {
      return "Umbrella is already closed";
    }
  },
};
