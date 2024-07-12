/*
Exercise 1: maxOfTwoNumbers()
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
// Exercise 2: isAdult()


const isAdult = (age) => {
    if (age >= 18){
        return "Adult"
    } else (age < 18)
    return "Minor"
}

console.log('Exercise 2 Results', isAdult(21));


// Exercise 3: isCharAVowel()


const isCharAVowel = (vowel) => {
    if (vowel === `a`|| vowel === `e` || vowel === `i`
        || vowel === `o` || vowel === `u`){
        return true;
}else {
    return false;
}
}

console.log('Exercise 3 Result:', isCharAVowel("a"));


//Exercise 4: generateEmail()


const generateEmail =(name, domian) => {
    return `${name}@${domian}`;
 }

 console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


// Exercise 5: greetUser()

const greetUser = (name, timeOfDay) => {
    return `Good ${timeOfDay}. ${name}!`;
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


//Exercise 6: maxOfThree()

const maxOfThree = (numA, numB, numC) =>{
    return Math.max (numA, numB, numC);
    
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

//Exercise 7: calculateTip()


const calculateTip = (amount, tip) => {
    tipdue = amount * (tip/100);
    return tipdue 
}


console.log('Exercise 7 Result:', calculateTip(50, 20));

// Exercise 8: convertTemperature()

const convertTemperature = (numD, scale) => {
    if (scale == "C") {
        return ((numD * 9/5) + 32);
    } else if (scale == "F") {
        return ((numD - 32) * 5/9);
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));


//Exercise 9: basicCalculator()
const basicCalculator = (num1, num2, operator) => {
    if (operator == 'add'){
        return (num1 + num2)
}else if (operator == 'subtract') {
    return (num1 - num2)
}else if (operator == 'multiply') {
    return (num1 * num2)
}else if (operator == 'divide') {
    return (num1 / num2)
}
}


console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));


// Exercise 10: calculateGrade()


const calculateGrade = (score) => {
    if (score >= 90) {
        return ('A');
    } else if (score >= 80) {
        return ('B');
     } else if (score >= 70) {
        return ('C'); 
     } else if (score >=60) {
        return ('D');
     }else (score < 60 )
        return ('F');
     }

console.log('Exercise 10 Result:', calculateGrade(85));

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre12'.

Complete the exercise in the space below:
*/
const createUsername = (firstName, _lastName) => {
    const firstUser = firstName.slice (0,3);
    const secondUser = _lastName.slice (0,3); 
    return (`${firstUser}${secondUser}${firstName.length + _lastName.length}`);
  }

// revisit on how to do count the characters 

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));



// /*
// Exercise 12: numArgs()

// Challenge yourself with numArgs. 
// This function should return the count of arguments passed to it when called.

// Complete the exercise in the space below:
// */

function numArgs() {
return arguments. length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));

//during support time see if this was completed correctly 

