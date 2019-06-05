"use strict";

var bubbleSort = arr => {
  var swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      console.log(arr.join(" "));
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        console.log(arr.join(" "));

        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  console.log(arr.join(" "));
  return arr;
};

/**
 * We declare an array of unsorted numbers using the array literal method.
 * See https://developer.mozilla.org/bm/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals
 * We do this as opposed to using the global Array object, i.e: var unsortedNumbersList = new Array()
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 * When declaring arrays, the array literal method is commonly used over the global Array object.
 * This is because they are easy to read, easy to understand, and generally offer better performance.
 * See https://jsperf.com/array-object-array-literal
 *
 * We declare this array as a variable named unsortedNumbersList.
 */
var unsortedNumbersList = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];

bubbleSort(unsortedNumbersList);
