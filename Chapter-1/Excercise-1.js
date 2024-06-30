/*
Problem statement:

What happens when you add 0 to the values NaN, Infinity, false, true, null, and undefined? 
What happens when you concatenate the empty string with NaN, Infinity, false, true, null, and undefined? 
Guess first and then try it out.
*/

// Solution
console.log(0 + NaN) // Answer will be NaN

// Any finite number added to Infinity remains Infinity because Infinity is not changed by adding a finite value to it.
console.log(0 + Infinity) // Answer will be Infinity

console.log(0 + false) // Answer will be 0
console.log(0 + true) // Answer will be 1

// JavaScript converts null to its numeric equivalent 0
console.log(0 + null) // Answer will be 0

// The conversion of undefined to a number results in NaN, that's why
console.log(0 + undefined) // Answer will be NaN


console.log('' + NaN) // Answer will be 'NaN'

console.log('' + Infinity) // Answer will be 'Infinity'

console.log('' + false) // Answer will be 'false'

console.log('' + true) // Answer will be 'true'

console.log('' + null) // Answer will be 'null'

console.log('' + undefined) // Answer will be 'undefined'

