// 1. Write a function that takes in an array of numbers and returns its sum.

function sum(numbers) {
  var number = 0;
  var index = 0;
  while (index < numbers.length) {
    number = numbers[index] + number;
    index++;
  }
  return number;
}
// console.log(sum([4, 1, 6]));


// 2. Write a function that takes in an array of strings and returns the smallest string.
function smallestStrings(strings) {
  var currentString = strings[0];
  strings.forEach(function (string) {
    // console.log(string);
    // console.log(currentString);
    // console.log("***");

    if (string.length < currentString.length) {
      currentString = string;
    }

  });
  return currentString;

}
// console.log(smallestStrings(["hi", "hello", "bye"]));

// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

// function revsereNumbers(numbers) {
//   var index = 0;
//   numbers

// }
// console.log(reverseNumbers[1, 2, 3, 4, 5]);


// 4. Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.



// 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other). 
// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.

function twoSmallest(numbers) {
  var smallest = numbers[0];
  // console.log(numbers)
  numbers.forEach(function (number) {
    if (number < smallest) {
      number = smallest;
    }


  })
  return smallest;
}
console.log(twoSmallest([1, 5, 3, 23, 52]));

// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
// 10. Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
// BONUS PROBLEMS
// Write a function that accepts a string and returns whether it’s a palindrome. 
// Write a function to generate/print/store the first “n” prime numbers.
// Given a tic-tac-toe board (matrix of 3 x 3), write a function that can check to see whether X or O won