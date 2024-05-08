const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));




  /*
Exercise 2: isAdult()

xWrite a function named isAdult.
 
xIt should take an age (number) and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
  if(age >= 18){
    return 'Adult'
  } else {
    return 'Minor'
  }
}

console.log('Exercise 2 Result:', isAdult(21));





/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

    const isCharAVowel = (a) => {
        if(a) 
            return 'true'
        else 'false'
}    
        console.log('Exercise 3 Result:', isCharAVowel('a'));


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/


function generateEmail()  {
  const name = "johnsmith";
  const domain = "example.com";
return generateEmail = "johnsmith" + "@example.com";
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "@example.com"));







/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening) and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser() {
  if (morning = true)
    return "Goodmorning, Sam!"
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));




/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/


const str = "rockstar"
function reverseString (str) {
  let reverse = "";

  for (const c of str) {
    reverse = c + reverse;
  }
  return reverse;
}
 

console.log('Exercise 6 Result:', reverseString("rockstar"));




/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/


function checkPalindrome () {
  let word = "radar"
  for ( let idx = 0; idx < str.length; idx++){

  }
} 


console.log('Exercise 7 Result:', checkPalindrome("radar"));



const checkPalindrome = (str) => {
  let forward = ""
  let backward = ""
  for ( let idx = 0; idx < str.length; idx++){
      let currentChar = str[idx]

      forward+=currentChar
      console.log(currentChar)
  }
    for (let idx = str.length-1; idx >= 0; idx--){
      let currentChar = str.length
    }
  return false
}

console.log('Exercise 7 Result:', checkPalindrome("radar"));

"cat"[]