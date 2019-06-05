/**
 * The following code contains syntax that, if written incorrectly,
 * would be caught by strict mode.
 * See https://github.com/floatsoft/javascript-references/blob/hello-world/varDeclaration.js#L1-L7
 */
"use strict";

/**
 * A function is a set of statements that perform a task or calculate a value,
 * we declare a function named bubbleSort with a single parameter; arr.
 * The procedure that define the function are enclosed in curly brackets following the name and parameters.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Defining_functions
 */
function bubbleSort(arr) {
  /**
   * We declare a global variable named swapped, as swapped is used only in the bubbleSort scope, 
   * a global variable is not ideal.
   * In ES6 we could declare this variable using the let statement - creating a block scope local variable.
   * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
   * For more information on variable declarations see
   * https://github.com/floatsoft/javascript-references/blob/hello-world/varDeclaration.js#L9-L15
   *
   * We initiate swapped to false, this is one of the two values that the boolean primitive can have, the other being true.
   * See https://developer.mozilla.org/en-US/docs/Glossary/Boolean
   * We could also leave swapped undefined by not assigning it a value, i.e: var swapped;
   * Using the primitive undefined or boolean false will accomplish identical goals in our below code.
   * See https://en.wikipedia.org/wiki/Undefined_value
   * See https://developer.mozilla.org/en-US/docs/Glossary/undefined
   * Normally it is better to explicitly assign a value to a variable.
   */
  var swapped = false;

  /**
   * The do...while statement creates a loop that executes a specified statement until the 
   * test condition evaluates to false.
   * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
   * 
   * The do...while loop will always run at least once.
   * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while#Using_do...while
   * Therefore it will run despite swapped evaluating to false, despite the while condition seeking an evaluation of true.
   */
  do {
    swapped = false;

    for (var i = 0; i < arr.length; i++) {
      console.log(arr.join(" "));

      if (arr[i] > arr[i + 1]) {
        var tmp = arr[i];
        console.log(arr.join(" "));
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);

  console.log(arr.join(" "));
  return arr;
}

/**
 * We declare an array of unsorted numbers using the array literal method.
 * See https://developer.mozilla.org/bm/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals
 * We do this as opposed to using the global Array object, i.e: const unsortedNumbersList = new Array()
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 * When declaring arrays, the array literal method is commonly used over the global Array object.
 * This is because they are easy to read, easy to understand, and generally offer better performance.
 * See https://jsperf.com/array-object-array-literal
 *
 * We declare this array as a constant named unsortedNumbersList.
 * For more information on variable declarations see
 * https://github.com/floatsoft/javascript-references/blob/hello-world/varDeclaration.js#L9-L15
 */
var unsortedNumbersList = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];

bubbleSort(unsortedNumbersList);
