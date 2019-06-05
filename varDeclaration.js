/**
 * "use strict" in this case
 * We are not declaring this code as an ES6 module and the following code
 * contains syntax that can be caught by strict mode.
 * See ./index.js for an example that does not benefit from strict mode.
 */
"use strict";

/**
 * The code below will declare a global string named helloWorld,
 * this is valid ES5 code, in ES6 we can also use let or const.
 * Normally in ES6 this would be declared as a const.
 * See ./es6.js for an example using const.
 */
var helloWorld = "Hello World";

/**
 * Strict mode will catch an undeclared variable i.e:
 * helloWorld = "Hello World"
 * The above commented line will throw an error in strict mode.
 */

/**
 * The Console object provides access to the browser's debugging console
 * See https://developer.mozilla.org/en-US/docs/Web/API/console
 * The Console object's methods include log()
 * The Console method log() outputs a message to the console.
 * The message is not limited to a single string.
 * See https://developer.mozilla.org/en-US/docs/Web/API/Console/log
 */
console.log(helloWorld);

/**
 * The easiest way to test this file is to run the following line in your console:
 * node varDeclaration.js
 */
