
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr;
}

bouncer([7, "ate", "", false, 9]);


/* -- PSEUDOCODE -- */

// filter array checking if elements of array are false


/* -- ASSIGNMENT -- */ 

/* Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()

bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
*/

/* info about ".filter()" method
Returns a new array, does not modify the original source. New array contains only those elements for which the callback (argument) method that we pass in return true.
Takes a function as an argument with up to three (optional) inputs:
An element in the array
The index of this element in the array
The array itself
e.g. var arr = [1,2,3,4];
var arrTransformed = arr.filter(function(element/val, index, arr) {
  return index % 2; 
}); 
console.log(arrTransformed); // [2, 4]
// only the values divisible by 2 are returned in the new array
