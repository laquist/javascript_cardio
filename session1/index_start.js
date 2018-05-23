// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'


function reverseString(str) {
  // return 'Let\'s Start'

  let arr = str.split('');
  arr.reverse();
  var test = arr.join('');
  
  return test.toString();
}

console.log('Opgave 1')
console.log(reverseString('Hello'));


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  var input = reverseString(str);
  if (input === str) {
    return true;
  }
  else {
    return false;
  }

}

console.log('Opgave 2');
console.log(isPalindrome('racecar'));


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  var text = int.toString();

  return reverseString(text);
}

console.log('Opgave 3');
console.log(reverseInt(123));


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  //Array
  var arr = str.split(' ')
  
  arr.forEach(element => {
    
  });

  //  = str.charAt(0);

  return first;
}

console.log('Opgave 4');
console.log(capitalizeLetters('de røde hunde'));


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}



// Call Function
// const output = reverseString('hello');

// console.log(output);
