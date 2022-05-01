// Return the last index of specified number

function lastIndexOf(arr, num) {
  // loop through the array

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === num) return i;
  }
  return -1;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 2));
console.log(lastIndexOf([0, 1, 4, 1, 2], 1));
console.log(lastIndexOf([0, 1, 4, 1, 2], 3));
