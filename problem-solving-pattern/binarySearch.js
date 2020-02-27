// Time complexity - log(n)

function binarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min < max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    if (currentElement > val) {
      max = currentElement - 1;
    } else if (currentElement < val) {
      min = currentElement + 1;
    } else {
      return middle;
    }
  }
  return -1;
}
