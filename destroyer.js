// works but isn't very elegant

function destroyer(arr) {
    var i = arguments.length; // determine how many arguments were passed. One will be the array itself.
    // start while loop checking against arguments starting at argument position 1
    var j = 1; // set start point for arguments
    while (i > 1) { // while the length of arguments is more than 1 (more than just the array)
        var k = arguments[j]; // start with first argument (that isn't the array)
        var filteredArr = arr.filter(function(el) { // filter original array based on elements   
            if ( el !== k ) { // if element = argument
              return el; // add it to the array
            } 
        }); 
        j++; // move to next argument
        i--; // reduce the count of the original arguments
        arr = filteredArr; //reassigns filtered array as original arr to run again against subsequent arguments
    }
  return filteredArr;
}

destroyer(["tree", "hamburger", 53], "tree", 53);

/* -- PSEUDOCODE -- */

// create function for filter array
// check array elements against passed arguments 
    // not sure how to check the arguments, maybe this is why they're suggesting to reference the arguments object
// return filtered array

/* -- ASSIGNMENT -- */

/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Here are some helpful links:
Arguments object
Array.prototype.filter()

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
*/