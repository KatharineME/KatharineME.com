// Kate's Javascript Note

// KEYWORDS
/* Keywords are built into Javascript, cannot be used as variables


// NUMBERS, STRINGS, BOOLEANS, and OBJECTS
/* Javascript has these too */

// NULL, UNDEFINED
/* Both represent the absence of a value, but are used differently.
For example the output of a function that doesnt return anything is 'undefined'. */

// SYMBOL
/* New feature, for more complex coding, they are uniquie identifiers. */

// CONSOLE
/* The console is an object, a collection o data, that can be accessed via the browser. */
console.log(5); // Prints 5 to console

// ARITHMATIC
/* Same as python */
console.log(11 % 3); // Prints the remainder, 2
console.log(2 * 3); // Prints 6

w += 1; // Can be written as w = w + 1
x -= 5; // Can be written as x = x - 5
y *= 2; // Can be written as y = y * 2
z /= 2; // Can be written as z = z / 2

// STRING CONCATENATION
console.log("middle" + " " + "space"); // Prints 'middle space'

// PROPERTIES
/* Data types have certain properties you can access */
console.log("Hello".length); // Prints 5

// METHODS
console.log("hello".toUpperCase()); // Prints 'HELLO'
console.log("Hey".startsWith("H")); // Prints true

// BUILT-IN OBJECTS
/* Like Math */
console.log(Math.random()); // Prints a random number between 0 and 1

// VARIABLES

/* This is a constant variable, it cannot be redefined, though its definition can be evaluated*/
const constant_variable = "Constant Variable";

/* Older way to declare variable. */
var Five = 5;

/* Preffered way to declare variable, can be redfined.  */
let FavoriteArtist = "Studio Ghibli";
