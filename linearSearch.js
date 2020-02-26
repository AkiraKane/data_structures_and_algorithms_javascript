// Time complexity - o(n)

function linearSearch(arr, val) {
  for (let i = 0; i < arr.legnth; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
