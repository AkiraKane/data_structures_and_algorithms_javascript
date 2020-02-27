// time complexity - o(n)

function anagram(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let i of arr1) {
    frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
  }

  for (let j of arr2) {
    frequencyCounter2[j] = (frequencyCounter2[j] || 0) + 1;
  }

  for (let a in frequencyCounter1) {
    if (!(a in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter1[a] !== frequencyCounter2[a]) {
      return false;
    }
  }
  return true;
}

console.log(anagram("rat", "car"));
