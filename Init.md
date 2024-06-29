### Golden rules to keep in mind

 - Variable with **let** or **const**, avoid **var**
 - Use **strict mode**
 - Know your types and avoid automatic type conversion
 - Understand prototypes, but use modern syntax for classes, constructors, and methods
 - Don’t use this outside constructors or methods
 
### Types and TypeOf Operator 

**Every value in JS in one of the following Types**

 - A number
 - Boolean (True/False)
 - Special Values (null and undefinded)
 - A string
 - A Symbol
 - An object
 
**The non-object types are called primitive types**

 - For any value, it's type can be found by typeof operator
 - typeof operator returns a string ('string'/'number'/...)

**though null is different from object but typeof null is 'object', a historical accident**

**Constructing objects that wrap primitive types like: new Number(42)/new String('hello') will have typeof object**
 - In JavaScript, there is no good reason to construct such wrapper instances
 - Coding standard recommends not to use it.
 
**https://jsdoc.app/, can be used for documentation comment**

```
Variables in JS are untyped, so a Variable that is initialized with **number** can be set to **string** later
It's not a good idea to do this.
There might be some scenarios, where this is necessary. Ex: Writing some generic that might work with different types
```

 - If a Variable is not initialized, it has a special value **undefinded**. Ex: let x;
 - If a Variables value will not change, then use **const** for that variable: Ex: const PI = 3.141592653589793
 - Trying to modify a **const** Variables value will give **run-time error**
 - Multiple Variables can be decalred with a single **let** or **const** statement: Ex: lex x = 100, y = 200;
 
**Avoid two obsolete forms of variable declarations, with <sub>var</sub> keyword or no keyword at all** 


### Identifiers

**The name of a variable must follow, general syntax for identifiers.**

 - Unicode letters, digits, _ and $
 - Can't start with digits
 - Best to avoid using $ and _ at the start or end
 - Some use _ at start to mark them as private
 
This keywords can not be used as identifier:

```
break case catch class const continue debugger default delete do else enum export extends false 
finally for function if import in instanceof new null return super switch this throw true try 
typeof var void while with
```

Strict mode adds some additional keywords, that can not be used as identifiers:

```
implements interface let package protected private public static
```

These keywords can be used but shouldn't

```
await as async from get of set target yield
```

### Numbers

**JS doesn't have explicit integer type. All numbers are double-precision floating-point number.**

 - Don’t worry about the difference between, say, 1 and 1.0.
 - Any integer numbers between Number.MIN_SAFE_INTEGER (−2^53 + 1 or -9,007,199,254,740,991) 
   and Number.MAX_SAFE_INTEGER (2^53 − 1 or 9,007,199,254,740,991) are represented accurately
 - Outside this range, will encounter roundoff errors
 - If needed larger than this **big integers** can be used
 - To convert a string to a number, can use parseFloat/parseInt. Ex: parseFloat('3.14') will be number 3.14
 - The toString method converts a number to a string. Ex: (3).toString() is '3'
 
**JavaScript has both functions and methods. The parseFloat and parseInt functions are not methods, 
so you don’t invoke them with the dot notation.**

**Can apply methods to number literals. However, number literal numst be enclosed in parentheses
so that the dot isn’t interpreted as a decimal separator - (3).toString()**


**When a integer is expected but passing fractional number, based on situation it might work or not**

 - 'Hello'.substring(0, 2.5), this will truncate the number to next smaller integer
 - But providing a fractional index: 'Hello'[2.5], this will be **undefinded**
 - Best to use Math.trunc(x) or Math.round(x), to avoid guessing what will happen
 - If a number is divided by 0, the result is **Infinity** or **-Infinity**
 - 0/0, is **NaN**, the “not a number” constant
 - Some number producing functions might return **NaN**, to indicate faulty input. Ex: parseFloat('ABC')
 
### Arithmetic Operators

 - JS has usual + - * / operators. / Operator always results in floating-point, even if both operands are integers
 - % operator results the reminder for positive integer operands. For negative intigers, there are some exceptions.
 - If operands are fractional, then **k % n** is the value obtained by **subtracting n from k, until result is less than n**
 - The <sub>**</sub> operator denotes “raising to a power”/^. Ex: 2**10 is 1024
 - If any operand of any Arithmetic operation is **NaN**, then the result is **NaN**
 - Assignment and Arithmetic operation can be combined. Ex: counter += 10

**'+' operator is also used to concate strings.** 
 - If any one operand is string, then it'll result in string. Ex: 'abc'+10 = 'abc10'
 - The expression x + y is a number 
	- if both operands are numbers
	- A string if at least one operand is a string
 - In all other cases, the rules get complex and the results are rarely useful. 
	- Either both operands are turned into strings and concatenated, or both are converted into numbers and added
	- Ex: null + undefined is evaluated as the numeric addition 0 + NaN, which results in NaN

**With the other arithmetic operators, only conversion to numbers is attempted**
 - Value of 6 * '7' is 42—the string '7' is converted to the number 7
 
**In JS How conversion to Numbers and Strings**

| Value | To Number | To String | 
| --- | --- | --- |
| A number | Itself | A string 'Number' |
| A string 'Number' | Number value | Itself |
| Empty String '' | 0 | '' |
| Any other string | NaN | Itself |
| false | 0 | 'false' |
| true | 1 | 'true' |
| null | 0 | 'null' |
| undefined | NaN | 'undefined' |
| empty array | 0 | '' |
| array with a single number | number | a string 'number' |
| Other arrays | NaN | string with elements of array joined by ',', like '1,2,3' |
| Objects | NaN by default, customizable | By default, '[object Object]', but can be customized |

**Tips to follow**
 - Don’t rely on automatic type conversions
 - Prefer template literals instead of string concatenation
 
### Boolean Values

 - Boolean type has only two values 'true' and 'false'
 - In a condition, values of any type will be converted into Boolean values 
	- 0, NaN, null, undefined, and the empty string are each converted to **false**
	- All others are **true**
	- In some cases, it might provide very confusing result
		- Best practice is to use **Boolean** values in condition
		
### null and undefined

 - JS has two ways to indicate the absence of a value
	- A variable is declared but not initialized, it's **undefined**
		- Commonly happens with function, when function has a parameter but it's not passed during function called
	- **null** is used with intentional absence of a value
	- **Better to use either <sub>undefined</sub> or <sub>null</sub> in a project for intentional absence of a value**
		- This will avoid unnecessary check for both undefined and null 
		
### Template Literals

 - Can contain expressions and span multiple lines
 - Can nest template literals inside the ${. . .} expressions
	- `Hello, ${firstname.length > 0 ? `${firstname[0]}. ` : '' } ${lastname}`
 - Newlines inside the Template Literals are embedded into the string
	```html
	`<div>Hello</div>
	<div>${destination}</div>`
	will results in 
	`<div>Hello</div>\n<div>World</div>`
	```
	- Windows line endings \r\n in the source file are converted to Unix line endings \n in the resulting string
 - To include '\ $ bacticks' need to escape them with backslash
 
### Objects

 - JS objects are different from traditional class based languages
 - JS objects are set of name/value pairs or properties
 - Existing property can be modified, deleted, new property can be added, even if object is declared as const
 - Accessing a non-Existing property will give **undefined**
 
### Object Literal Syntax

 - Trailing Comma in Object Literal
	- Allows easy addition of new properties.
	```javascript
		let harry = {
		  name: 'Harry Smith',
		  age: 42, // Add more properties below
		}
	```
 - Property Value Shorthand
	- If variable names match property names, you can use shorthand.
	```javascript
		let age = 43
		let harry = { name: 'Harry Smith', age } // age is now 43
	```
 - Computed Property Names
	- Use brackets to define property names dynamically.
	```javascript
		let field = 'Age'
		let harry = { name: 'Harry Smith', [field.toLowerCase()]: 42 }, // [] is used
	```
 - Property Name Always a String
	- If property name doesn’t follow identifier rules, quote it.
	```javascript
		let harry = { name: 'Harry Smith', 'favorite beer': 'IPA' }
	```
 - Accessing Properties with Non-Identifier Names
	- Use bracket notation instead of dot notation.
	```javascript
		harry['favorite beer'] = 'Lager'
	```
 - Object Literal vs. Block Statement
	- An opening brace { can indicate an object literal or a block statement.
	```javascript
		{} - 1 // Interpreted as an empty block, then -1 is evaluated
		1 - {} // Interpreted as an object literal, results in NaN

	```
 - If an object literal is falsely parsed as a block
	- Enclose the object literal in parentheses to avoid misinterpretation as a block
	```javascript
		({} - 1) // Forces interpretation as an object literal
	```
	
### Arrays

**In JavaScript, an array is simply an object whose property names are the strings '0', '1', '2', and so on.**

 - Array Length and Indexing
	- The length property is one more than the highest index.
	- Example: numbers.length is 4.
	- Use bracket notation to access elements: numbers['1'] or numbers[1].
 
 - Element Types
	- Arrays can contain mixed types (e.g., numbers and strings).
	- Example: const numbers = [1, 2, 3, 'four'].

 - Missing Elements
	- Arrays can have missing elements.
	- Example: const someNumbers = [, 2, , 9] (no properties '0', '2').
	- Nonexistent properties return undefined.
	
 - Adding Elements
	- Add elements past the end of the array.
	- Example: someNumbers[6] = 11 (length becomes 7).

 - Trailing Commas
	- Trailing commas do not indicate missing elements.
	- Example: [1, 2, 7, 9,] has four elements (highest index is 3).
	- Useful for expanding literals over time.

 - Arbitrary Properties
	- Arrays can have arbitrary properties.
	- Example: numbers.lucky = true.

 - Type Checking
	- typeof returns 'object' for arrays.
	- Use Array.isArray(obj) to check if an object is an array.

 - String Conversion
	- Arrays convert to strings by joining elements with commas.
	- Example: '' + [1, 2, 3] results in the string '1,2,3'.
	- An array of length 0 becomes an empty string.

 - Multidimensional Arrays:
	- Simulate with arrays of arrays.
	```javascript
	const melancholyMagicSquare = [
	  [16, 3, 2, 13],
	  [5, 10, 11, 8],
	  [9, 6, 7, 12],
	  [4, 15, 14, 1]
	];

	// Access elements with two bracket pairs:
	melancholyMagicSquare[1][2] // 11
	```
	
### JSON

**JSON is a lightweight text format for exchanging object data. Uses JavaScript syntax for object and array literals with some restrictions.**

 - Restrictions in JSON
	- Values can be object literals, array literals, strings, floating-point numbers, and the values true, false, and null.
	- Strings values and property names must be delimited by double quotes.
	- No trailing commas or skipped elements.
	
 - Converting Between JSON and JavaScript
	- JSON.stringify turns a JavaScript object into a JSON string.
	- JSON.parse parses a JSON string into a JavaScript object.

 - Handling undefined Values
	- JSON.stringify drops object properties with undefined values.
	- Converts undefined array elements to null.
	```javascript
	JSON.stringify({ name: ['Harry', undefined, 'Smith'], age: undefined })
	// Result: '{"name":["Harry",null,"Smith"]}'
	```
	
- Logging with JSON
	- console.log with an object can be uninformative ([object Object]).
	- Remedy by using JSON.stringify:
	```javascript
	console.log(`harry=${JSON.stringify(harry)}`)
	```
	- Alternatively, log names and values separately:
	```javascript
	console.log('harry=', harry, 'sally=', sally)
	// Or log them in an object:
	console.log({ harry, sally }) // Logs { harry: { ... }, sally: { ... } }
	```