# Introduction to Basic Algorithm Scripting

https://github.com/oguzhanturgut/freecodecamp/wiki/Introduction-to-Basic-Algorithm-Scripting

A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. To write an algorithm, you must first understand a problem, and then solve it with coding.

To make solving problems easier, it can be helpful to break them down into many chunks. Then, each chunk can be solved one by one. For example, if you are building a calculator, don't try to solve the problem as a whole. First, consider how to get inputs. Then, determine each arithmetic operation one by one. Finally, display the results.

In this section we will learn to solve basic algorithm problems using JavaScript. This will help you improve your problem solving skills and prepare you to later solve more complex problems.

Hint
If you get stuck, try using `console.log()` to log variable values to the console. This will help to debug problems.


***

# Basic Algorithm Scripting: Convert Celsius to Fahrenheit
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times `9/5`, plus `32`.

You are given a variable `celsius` representing a temperature in Celsius. Use the variable `fahrenheit` already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

Don't worry too much about the function and return statements as they will be covered in future challenges. For now, only use operators that you have already learned.

    function convertToF(celsius) {
      let fahrenheit;
      fahrenheit = (9/5) * celsius + 32;
      return fahrenheit;
    }

    convertToF(30);


***

# Basic Algorithm Scripting: Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

    function reverseString(str) {
      let newArr = str.split('');
      newArr.reverse();
      str = newArr.join('');
      return str;
      // return str.split("").reverse().join("");
    }

    reverseString("hello");

    
    RECURSION

    function reverseString(str) {
      if (str === "") // This is the terminal case that will end the recursion
        return "";
      
      else
        return reverseString(str.substr(1)) + str.charAt(0);
    /* 
    First Part of the recursion method
    You need to remember that you won’t have just one call, you’ll have several nested calls

    Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
    1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
    2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
    3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
    4th call – reverseString("lo")      will return   reverseString("o")              + "l"
    5th call – reverseString("o")       will return   reverseString("")               + "o"

    Second part of the recursion method
    The method hits the if condition and the most highly nested call returns immediately

    5th call will return reverseString("") + "o" = "o"
    4th call will return reverseString("o") + "l" = "o" + "l"
    3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
    2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
    1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
    */
    }
    reverseString("hello");

***

# Basic Algorithm Scripting: Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter `n`, a factorial is the product of all positive integers less than or equal to `n`.

Factorials are often represented with the shorthand notation `n!`

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Only integers greater than or equal to zero will be supplied to the function.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

    function factorialize(num) {
      return Array(num).fill(1).map((x, y) => x + y).reduce((a, b) => a * b, 1);
    }

    factorialize(5);


***

# Basic Algorithm Scripting: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

    function findLongestWordLength(str) {
      return str.split(' ').reduce((a, b) => {
        return Math.max(a, b.length)
      }, 0);
    }

    findLongestWordLength("The quick brown fox jumped over the lazy dog");


***

# Basic Algorithm Scripting: Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax `arr[i]`.

    function largestOfFour(arr) {
      return arr.map(function(group){
        return group.reduce(function(prv, curr) {
          return (curr > prv) ? curr : prv;
        });
      });
    }

    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

    function largestOfFour(arr) {
      var results = [];
      for (var n = 0; n < arr.length; n++) {
        var largestNumber = arr[n][0];
        for (var sb = 1; sb < arr[n].length; sb++) {
          if (arr[n][sb] > largestNumber) {
            largestNumber = arr[n][sb];
          }
        }

        results[n] = largestNumber;
      }

      return results;
    }


***

# Basic Algorithm Scripting: Confirm the Ending
Check if a string (first argument, `str`) ends with the given target string (second argument, `target`).

This challenge can be solved with the `.endsWith()` method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

    function confirmEnding(str, target) {
      // "Never give up and good luck will find you."
      // -- Falcor

      return str.slice(-target.length) === target;
    }

    confirmEnding("Bastian", "n");


***

# Basic Algorithm Scripting: Repeat a String Repeat a String
Repeat a given string `str` (first argument) for `num` times (second argument). Return an empty string if `num` is not a positive number.

    function repeatStringNumTimes(str, num) {
      // repeat after me
      // power of recursion
      return num < 1 ? '' : str + repeatStringNumTimes(str, num - 1);
    }

    repeatStringNumTimes("abc", 3);


***



# Basic Algorithm Scripting: Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a `...` ending.

    function truncateString(str, num) {
      // Clear out that junk in your trunk
      return str.slice(0,num) + ((num >= str.length)? '' : "...");
    }

    truncateString("A-tisket a-tasket A green and yellow basket", 8);


***

# Basic Algorithm Scripting: Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

    function findElement(arr, func) {
      let num = 0;
      for (; num<arr.length ; num++){
        if (func(arr[num])) break;
      }
      return arr[num];
    }

    findElement([1, 2, 3, 4], num => num % 2 === 0);


***

# Basic Algorithm Scripting: Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

    function booWho(bool) {
      // What is the new fad diet for ghost developers? The Boolean.

      return typeof bool === "boolean";
    }

    booWho(null);


***

# Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

    function titleCase(str) {
      return str.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    titleCase("I'm a little tea pot");


***

# Basic Algorithm Scripting: Slice and Splice
You are given two arrays and an index.

Use the array methods `slice` and `splice` to copy each element of the first array into the second array, in order.

Begin inserting elements at index `n` of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

    function frankenSplice(arr1, arr2, n) {
      // It's alive. It's alive!
      let newArray = arr2.slice();
      for (let i = 0; i < arr1.length; i++) {
        newArray.splice(n, 0, arr1[i]);
        n++;
      }
      return newArray;
    }

    frankenSplice([1, 2, 3], [4, 5, 6], 1);


***

# Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

Hint: Try converting each value to a Boolean.

    function bouncer(arr) {
      // Don't show a false ID to this bouncer.
      return arr.filter(Boolean);
    }

    bouncer([7, "ate", "", false, 9]);

# Basic Algorithm Scripting: Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, `getIndexToIns([1,2,3,4], 1.5)` should return `1` because it is greater than `1` (index 0), but less than `2` (index 1).

Likewise, `getIndexToIns([20,3,5], 19)` should return `2` because once the array has been sorted it will look like `[3,5,20]` and `19` is less than `20` (index 2) and greater than `5` (index 1).

    function getIndexToIns(arr, num) {
      // Find my place in this sorted array.
      arr.push(num);
      arr.sort((a, b) => a - b);
      return arr.indexOf(num);
      // return arr.concat(num).sort((a,b) => a-b).indexOf(num);
    }

    getIndexToIns([40, 60], 50);



***

# Basic Algorithm Scripting: Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, `["hello", "Hello"]`, should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments `["hello", "hey"]` should return false because the string "hello" does not contain a "y".

Lastly, `["Alien", "line"]`, should return true because all of the letters in "line" are present in "Alien".

    function mutation(arr) {
      // let checkArr = arr[1].toLowerCase().split('');
      // let sourceArr = arr[0].toLowerCase().split('');
      // //console.log(checkArr);
      // for (let i=0; i < checkArr.length; i++) {
      //   if (sourceArr.indexOf(checkArr[i]) == -1) return false;
      // }
      // return true;

      return arr[1].toLowerCase()
        .split('').every(i => {
          return arr[0].toLowerCase()
            .indexOf(i) != -1
        });
    }

    mutation(["hello", "hey"]);


***

# Basic Algorithm Scripting: Chunky Monkey
Write a function that splits an array (first argument) into groups the length of `size` (second argument) and returns them as a two-dimensional array.

    function chunkArrayInGroups(arr, size) {
      // Break it up.
      let newArr = [];
      while (arr.length) {
        newArr.push(arr.splice(0,size));
      }
      return newArr;
    }

    chunkArrayInGroups(["a", "b", "c", "d"], 2);

OR

    function chunkArrayInGroups(arr, size) {
        // power of recursion
          if (arr.length <= size){
            return [arr];
          }
          else {
            return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
          }
        }

    chunkArrayInGroups(["a", "b", "c", "d"], 2);
