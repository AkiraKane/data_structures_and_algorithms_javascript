function anagram(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i of arr1) {
    let correctIndex = arr2.indexOf(i);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(anagram("rat", "car"));
