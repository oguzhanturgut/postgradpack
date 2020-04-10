// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // const arr = sen.split(" ");
  // let longest = 0;
  // let max = 0;
  // arr.forEach((el, ind) => {
  //   if (el.length > max) {
  //     max = el.length;
  //     longest = ind;
  //   }
  // });
  // return arr[longest];
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  const arr = sen.split(" ");
  const result = arr.reduce((acc, curr) => {
    if (acc[curr.length]) {
      acc[curr.length].push(curr);
    } else {
      acc[curr.length] = [curr];
    }
    return acc;
  }, {});
  const sorted = Object.keys(result).sort((a, b) => b - a);
  return result[sorted[0]].length > 1
    ? result[sorted[0]]
    : result[sorted[0]][0];
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  const cloneArr = [...arr];
  const result = [];
  // split into parts and add to new array
  while (cloneArr.length > len) {
    result.push(cloneArr.splice(0, len));
  }
  // push the rest
  result.push(cloneArr.splice(0, cloneArr.length));
  return result;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  return arrays.flat();
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  const normalize = (str) =>
    [...str.replace(/[^\w]/g, "").toLowerCase()].sort().join("");
  return normalize(str1) === normalize(str2);
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  const result = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  // capitalize the words
  return result.replace(/a|e|i|o|u/gi, (char) => char.toUpperCase());
}

console.log(letterChanges("hello there"));

// Call Function
const output = longestWord("Hello, my name is Brad");

console.log(output);
