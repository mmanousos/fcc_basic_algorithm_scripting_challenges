// doesn't check against second argument

function destroyer(arr) {
    var i = arguments.length; // determine how many arguments were passed. One will be the array itself.
    // start while loop checking against arguments starting at argument position 1
    while (i > 1) {
        var j = 1;
        var k = argument[j];
        var filteredArr = arr.filter(function(el) {    
            if ( el !== k ) {
                return el;         
            }
            j++;
            i--;
        }); 
    }
  return filteredArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

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