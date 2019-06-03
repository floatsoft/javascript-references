/** Do not include "use strict"
    In this case we are declaring this code as an ES6 module,
    module code is always strict mode code.
    See http://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-code
    See ./varDeclaration.js for an example that is not in strict mode by default.
*/

/** The code below will declare and export a string constant named helloWorld,
    this is valid ES6 code, in ES5 we can only use var.
    See ./varDeclaration.js for an example using var.
*/
export const helloWorld = "Hello World";

/** Strict mode will catch an undeclared variable i.e:
    helloWorld = "Hello World"
    The above commented line will throw an error in strict mode.
*/

/** The Console object provides access to the browser's debugging console
    See https://developer.mozilla.org/en-US/docs/Web/API/console
    The Console object's methods include log()
    The Console method log() outputs a message to the console.
    The message is not limited to a single string. 
    See https://developer.mozilla.org/en-US/docs/Web/API/Console/log
*/
console.log(helloWorld);

/** The easiest way to test this file is to run the following line in your console
    nodemon varDeclaration.js
*/
