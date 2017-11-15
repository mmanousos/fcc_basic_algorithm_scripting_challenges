function destroyer(arr) {
    var filteredArr = arr.filter(function(el) {
        {
            
        }
       return el 
    });
  return filteredArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/* -- PSEUDOCODE -- */

// create function for filter array
// check array elements against passed arguments 
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