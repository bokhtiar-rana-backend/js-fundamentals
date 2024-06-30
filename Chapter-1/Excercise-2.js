/*
Problem statement:

Whatare[] + [],{} + [],[] + {},{} + {},[] - {}?
Compare the results of evaluating the expressions at the command line and assigning them to a variable. 
Explain your findings.
*/

// Solution

console.log([] + []) // Answer will be ''
const one = [] + [];
console.log(one);

console.log({} + []) // Answer will be '[object object]'
const two = {} + [];
console.log(two);

console.log([] + {}) // Answer will be '[object object]'
const three = [] + {};
console.log(three);

console.log({} + {}) // Answer will be '[object object][object object]'
const four = {} + {};
console.log(four);

console.log([] - {}) // Answer will be 'NaN'
const five = [] - {};
console.log(five);