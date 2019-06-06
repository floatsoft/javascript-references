/**
 * This is an implementation of the bubble sort algorithm written in JavaScript.
 * See https://en.wikipedia.org/wiki/Bubble_sort#Implementation
 */

/**
 * The following code contains syntax that, if written incorrectly,
 * would be caught by strict mode.
 * See https://github.com/floatsoft/javascript-references/blob/hello-world/varDeclaration.js#L1-L7
 */
"use strict";

/**
 * A function is a set of statements that perform a task or calculate a value, functions can take zero or more parameters.
 * We declare a function named bubbleSort with a single parameter; arr.
 * The procedure that define the function are enclosed in curly brackets following the name and parameters.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Defining_functions
 */
function bubbleSort(arr) {
  /**
   * We declare a scoped variable named swapped, as swapped is used only in the bubbleSort it would be ideal
   * to explicitly indicate that it is local.
   * In ES6 we could declare this variable using the let statement - creating a block scope local variable.
   * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
   * However, in this use case, swapped is in fact constrained to the scope of our function bubbleSort.
   * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#Description
   * For more information on variable declarations see
   * https://github.com/floatsoft/javascript-references/blob/hello-world/varDeclaration.js#L9-L15
   *
   * We initiate swapped to false, this is one of the two values that the boolean primitive can have, the other being true.
   * See https://developer.mozilla.org/en-US/docs/Glossary/Boolean
   * We could also leave swapped undefined (undeclared) by not assigning it a value, i.e: var swapped;
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
    /**
     * We assign our global variable named swapped to boolean false.
     * Anticipating that the loop must run more than once, we use the below line to ensure that it will eventually end.
     */
    swapped = false;
    /**
     * The for statement creates a loop that consists of three optional expressions.
     * Following the expressions is usually a block statement, as in the code below.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
     * The expressions consist of an initialization, condition, and final-expression.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#Syntax
     *
     * We initialize our for loop with a declared variable named i assigned the integer value 0.
     * See https://developer.mozilla.org/en-US/docs/Glossary/number
     * This serves as our initialization expression, in this case used to initialize a counter variable
     *
     * The condition of our for loop must be met before each loop iteration.
     * In this case i must be less than the length of arr.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
     * If the expression evaluates to false, execution skips to the first expression following the for construct.
     *
     * For our final-expression we increment our variable i by 1 using the increment arithmetic operator.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_()
     * This occurs before the next evaluation of condition.
     *
     * Following our expressions is our block statement, this block contains our main sorting logic.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block
     */
    for (var i = 0; i < arr.length; i++) {
      /**
       * Here we use our Console object to print our array.
       * See https://github.com/floatsoft/javascript-references/blob/a8a21cf1f9866c2693721c181b4ab6dae4af4dd8/index.js#L9-L17
       * We print here to get glimpse of our array just before it reaches the adjacent pair comparison and subsequent sorting
       * portion of our code.
       * See https://en.wikipedia.org/wiki/Bubble_sort#Step-by-step_example
       */
      console.log("before: ", arr.join(" "));

      /**
       * An if statement executes it's statement only if a specified condition is truthy.
       * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
       * See https://developer.mozilla.org/en-US/docs/Glossary/truthy
       *
       * Our condition is described just before our block statement. This condition will evaluate to a truthy or falsy value.
       * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else#Syntax
       * See https://developer.mozilla.org/en-US/docs/Glossary/falsy
       *
       * Our condition dictates that arr[i] must be greater than arr[i + 1] by employing the greater than operator.
       * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator
       *
       * As a reminder, arr is our single parameter being passed to our bubbleSort function. arr must be an Array.
       * See https://github.com/floatsoft/javascript-references/blob/bubble-sort/index.js#L13-L19
       *
       * We can select elements from our array by referencing there index.
       * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Accessing_array_elements
       * Here we use our variable i and the sum of i + 1 as our indexes.
       *
       * We finally select our array element by using bracket notation, i.e: [i]
       * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#Bracket_notation
       */
      if (arr[i] > arr[i + 1]) {
        /**
         * We assign the value of arr[i] to a variable named tmp.
         * For more information on variable declarations see
         * https://github.com/floatsoft/javascript-references/blob/hello-world/varDeclaration.js#L9-L15
         * 
         * We do this so that we do not loss the value of arr[i] during the swapping process.
         * This is because we are doing our element swapping in-place.
         * See https://en.wikipedia.org/wiki/In-place_algorithm
         */
        var tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
        console.log("after: ", arr.join(" "));
      }
    }
    /**
     * The condition on this do...while loop is that is must run at least once and until swapped is false.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while#Syntax
     */
  } while (swapped);

  console.log("final: ", arr.join(" "));
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
