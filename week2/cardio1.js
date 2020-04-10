// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
// solution 1
function reverseString(str) {
  return [...str].reverse().join('');
}
// solution 2
function reverseString(str) {
  let result = '';
  for (const char of str) {
    result += char;
  }
  return result;
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const mid = Math.ceil(str.length / 2); // traverse only to the middle of
  // string, otherwise not a good practice for performance
  for (let i = 0; i < mid; i++) {
    if(str[i] !== str[str.length-1 -i]) return false;
  }
  return true;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
// solution 1
function reverseInt(int) {
  return parseInt([...String(int)].reverse().join(''));
}
// solution 2
function reverseInt(int) {
  let result = '';
  for (const n of String(int)) {
    result += n;
  }
  return parseInt(result);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const store = [...str].reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});
  const sorted = Object.keys(store).sort((first, second) => store[second] - store[first]);
  return sorted[0];
}


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    console.log(i % 3 === 0 ? (i % 5 === 0 ? 'FizzBuzz' : 'Fizz') : i % 5 === 0 ? 'Buzz' : i);
  }
}



// Call Function
const output = reverseString('hello');

console.log(output);
