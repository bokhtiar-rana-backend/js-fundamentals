### Golden rules to keep in mind

 - Variable with **let** or **const**, avoid **var**
 - Use **strict mode**
 - Know your types and avoid automatic type conversion
 - Understand prototypes, but use modern syntax for classes, constructors, and methods
 - Don’t use <sub>this</sub> outside constructors or methods
 
### Types and TypeOf Operator 

**Every value in JS in one of the following Types**

 - A number **Inclues NaN and Infinity: typeof NaN/Infinity is 'number'**
 - Boolean (True/False)
 - Special Values (null and undefinded)
 - A string
 - A Symbol
 - An object
 
**The non-object types are called primitive types**

 - For any value, it's type can be found by typeof operator
 - typeof operator returns a string ('string'/'number'/...)

**Though null is different from object but typeof null is 'object', a historical accident**
**typeof undefined is equaled to 'undefined'**

**Constructing objects that wrap primitive types like: new Number(42)/new String('hello') will have typeof 'object'**
 - In JavaScript, there is no good reason to construct such wrapper instances
 - Coding standard recommends not to use it.
 
**https://jsdoc.app/, can be used for documentation comment**

```
Variables in JS are untyped, so a Variable that is initialized as NUMBER
can be set to STRING later. Though, it's not a good idea to do this.
There might be some scenarios, where this is necessary. 
Ex: Writing some generic that might work with different types
```

 - If a Variable is not initialized, it has a special value **undefinded**. Ex: let x;
 - If a Variables value will not change, then use **const** for that variable: Ex: const PI = 3.141592653589793
 - Trying to modify a **const** Variables value will give **run-time error**
 - Multiple Variables can be decalred with a single **let** or **const** statement: Ex: lex x = 100, y = 200;
 
**Avoid two obsolete forms of variable declarations, with *var* keyword or no keyword at all** 


### Identifiers

**The name of a variable must follow, general syntax for identifiers.**

 - Unicode letters, digits, _ and $
 - Can't start with digits
 - Best to avoid using $ and _ at the start or end
 - Some developers use _ at start to mark them as private
 
 - This keywords can not be used as identifier:
	```javascript
	break case catch class const continue debugger default delete do else enum export extends false 
	finally for function if import in instanceof new null return super switch this throw true try 
	typeof var void while with
	```

 - Strict mode adds some additional keywords, that can not be used as identifiers:
	```javascript
	implements interface let package protected private public static
	```

 - These keywords can be used but shouldn't
	```javascript
	await as async from get of set target yield
	```

### Numbers

**JS doesn't have explicit integer type. All numbers are double-precision floating-point number.**

 - Don’t worry about the difference between, say, 1 and 1.0.
 - Any integer numbers between *Number.MIN_SAFE_INTEGER (−2^53 + 1 or -9,007,199,254,740,991)* 
   and *Number.MAX_SAFE_INTEGER (2^53 − 1 or 9,007,199,254,740,991)* are represented accurately
 - Outside this range, will encounter roundoff errors
 - If needed larger than this, **big integers** can be used
 - To convert a string to a number, can use parseFloat/parseInt. Ex: parseFloat('3.14') will be number 3.14
 - The toString method converts a number to a string. Ex: (3).toString() is '3'
 
**JavaScript has both functions and methods. The parseFloat and parseInt functions are not methods, 
so you don’t invoke them with the dot notation.**

**Can apply methods to number literals. However, number literal numst be enclosed in parentheses
so that the dot isn’t interpreted as a decimal separator. Use (3).toString() instead of ~~3.toString()~~**


**When a integer is expected but passing fractional number, based on situation it might work or not**

 - 'Hello'.substring(0, 2.5), this will truncate the number to next smaller integer
 - But providing a fractional index: 'Hello'[2.5], this will be **undefined**
 - Best to use Math.trunc(x) or Math.round(x), to avoid guessing what will happen
 - If a number is divided by 0, the result is **Infinity** or **-Infinity**
 - 0/0, is **NaN**, the “not a number” constant
 - Some number producing functions might return **NaN**, to indicate faulty input. Ex: parseFloat('ABC')
 
### Arithmetic Operators

 - JS has usual + - * / operators. / Operator always results in floating-point, even if both operands are integers
 - % operator results the reminder for positive integer operands. For negative intigers, there are some exceptions.
 - If operands are fractional, then **k % n** is the value obtained by **subtracting n from k, until result is less than n**
 - The \*\* operator denotes “raising to a power”/^. Ex: 2\*\*10 is 1024
 - If any operand of any Arithmetic operation is **NaN**, then the result is **NaN**
 - Assignment and Arithmetic operation can be combined. Ex: counter += 10

**'+' operator is also used to concate strings.** 
 - If any one operand is string, then it'll result in string. Ex: 'abc'+10 = 'abc10'
 - The expression x + y is
	- *A number* if both operands are numbers
	- *A string* if at least one operand is a string
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
| array with a single element: ['number'] | number | a string 'number' |
| Other arrays | NaN | string with elements of array joined by ' , ' like '1,2,3' |
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
	- \`Hello, ${firstname.length > 0 ? \`${firstname[0]}. \` : '' } ${lastname}\`
 - Newlines inside the Template Literals are embedded into the string
	```html
	`<div>Hello</div>
	<div>${destination}</div>`
	will results in 
	`<div>Hello</div>\n<div>World</div>`
	```
	- Windows line endings *\r\n* in the source file are converted to Unix line endings *\n* in the resulting string
 - To include '\ $ \`' need to escape them with backslash
 
### Objects

 - JS objects are different from traditional class based languages
 - JS objects are set of name/value pairs or properties
 - Existing property can be modified, deleted, new property can be added, even if object is declared as **const**
 - Accessing a non-Existing property will give **undefined**
 - To delete a property, use *delete object.property*
 
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
	- Example: const numbers = [1, 2, 3]. Here numbers.length is 4.
	- Use bracket notation to access elements: numbers['1'] or numbers[1].
 
 - Element Types
	- Arrays can contain mixed types (e.g., numbers, strings, objects).
	- Example: const numbers = [1, 2, 3, 'four', {name: 'Harry'}].

 - Missing Elements
	- Arrays can have missing elements.
	- Example: const someNumbers = [, 2, , 9] (no properties '0', '2').
	- Nonexistent properties return undefined.
	
 - Adding Elements
	- Add elements past the end of the array.
	```javascript
	const someNumbers = [, 2, , 9]; 
	someNumbers[6] = 11 // someNumbers.length becomes 7.
	```

 - Trailing Commas
	- Trailing commas do not indicate missing elements.
	- Example: [1, 2, 7, 9,] has four elements (highest index is 3).
	- Useful for expanding literals over time.

 - Arbitrary Properties
	- Arrays can have arbitrary properties.
	- Example: numbers.lucky = true.

 - Type Checking
	- typeof returns 'object' for arrays.
	- Use Array.isArray(someNumbers) to check if an object is an array.

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
	- Values can be object literals, array literals, strings, floating-point numbers, true, false, and null.
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
	
### Destructuring

**Convenient syntax for fetching elements from arrays or values from objects.**

 - Array Destructuring
	- Simplifies extraction of array elements.
	```javascript
	let [first, second] = pair
	// Complex cases
	let [first, [second, third]] = [1, [2, 3]]
	// first = 1, second = 2, third = 3
	```
	
	- Unmatched elements are ignored or set to undefined
	```javascript
	let [first, second] = [1, 2, 3] // third element ignored
	let [first, second] = [1] // second = undefined
	```

	- Reassigning Variables
		- Destructuring can reassign already declared variables:
		```javascript
		let first = 1, second = 2;
		[first, second] = [4, 5]
		// Swapping values
		[x, y] = [y, x]
		```

	- Using Lvalues
		- Any lvalues can be used on the left-hand side:
		```javascript
		[numbers[0], harry.age] = [13, 42]
		```

 - Object Destructuring
	- Use property names to extract values.
	```javascript
	let harry = { name: 'Harry', age: 42 }
	let { name: harrysName, age: harrysAge } = harry
	```

	- Shorthand when property names match variable names
	```javascript
	let { name, age } = harry
	// Same as:
	let { name: name, age: age } = harry
	```

	- Assignment with Existing Variables
		- Enclose in parentheses otherwise it'll be parsed as block statement
		```javascript
		Copy code
		({ name, age } = sally)
		```
		
#### Advanced Destructuring

 - Destructure nested objects
	- Extracts year from the birthday object inside pat.
	```javascript
	let pat = { name: 'Pat', birthday: { day: 14, month: 3, year: 2000 } };
	let { birthday: { year: patsBirthYear } } = pat;
	```
		- Declares the variable patsBirthYear and initializes it to 2000
	- This is equivalant to
	```javascript
	// Directly assigns pat.birthday.year to patsBirthYear.
	let patsBirthYear = pat.birthday.year;
	```
	
 - Computed Property Names
	- Use computed property names: Uses a dynamic key (field.toLowerCase()) to extract a property.
	```javascript
	let field = 'Age';
	let { [field.toLowerCase()]: harrysAge } = harry;
	// Sets value to harry[field.toLowerCase()]
	```

 - Destructuring Arrays:
	- Capture remaining elements: first gets the first element, second gets the second, and others captures the rest.
	```javascript
	let numbers = [1, 7, 2, 9];
	let [first, second, ...others] = numbers;
	// first is 1, second is 7, and others is [2, 9]
	```

	- If insufficient elements, then the rest variable becomes an empty array
	```javascript
	let [first, second, ...others] = [42];
	// first is 42, second is undefined, others is []
	// first gets the first element, second is undefined, and others is an empty array.
	```
 
 - Rest Declaration for Objects
	- A rest declaration also works for objects
	```javascript
	const harry = { age: 42, firstName: 'Harry', lastName: 'Styles', name: 'Julliet' }
	let { name, ...allButName } = harry;
	// allButName is { age: 42, firstName: 'Harry', lastName: 'Styles'}
	// name gets the name property, and allButName captures the rest of the properties.
	```
	
	- If insufficient elements, then the rest variable becomes an empty array
	```javascript
	const harry = { name: 'Harry' }
	const { name, ...rest } = harry
	// here rest is empty object {}
	```
	
 - Destructuring with Defaults:
	- Can provide default value for each, it'll be used if desired value is not present in object or array
	```javascript
	let [first, second = 0] = [42];
	// Sets first to 42, second to 0 since the right-hand side has no matching element

	const harry = { name: 'Harry' }
	let { lastName: nickName = 'None' } = harry;
	// Sets nickName to 'None' since harry has no lastName property
	let { nickName = 'None' } = harry;
	// Sets nickName to 'None' since harry has no nickName property
	```
	
	- Can use previously set variables in defaults
	```javascript
	let { name, nickName = name } = harry;
	// Both name and nickName are set to harry.name
	```

	- Application with defaults
	```javascript
	let config = { separator: '; ' };
	const { separator = ',', leftDelimiter = '[', rightDelimiter = ']' } = config;
	// separator is '; ', leftDelimiter is '[', rightDelimiter is ']'
	// Uses provided separator and defaults for leftDelimiter and rightDelimiter.
	```