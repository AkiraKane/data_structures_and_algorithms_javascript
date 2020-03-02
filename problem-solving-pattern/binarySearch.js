// Time complexity - log(n)

function binarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min < max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    if (currentElement > val) {
      max = middle - 1;
    } else if (currentElement < val) {
      min = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));
