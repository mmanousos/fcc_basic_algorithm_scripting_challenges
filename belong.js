function getIndexToIns(arr, num) {
    function ascending( a, b ) { //create a function that checks if each array element is larger than the other
        return a - b;  // if a - b is negative, a should come before b in the sort order
    }
    var sorted = arr.sort(ascending); // pass the function into the sort method to sort the array in ascending order

    var c = sorted.length; // get the length of the array
    var arg = arguments[1]; // get the argument to check 
    var d = 0; // set the place to start cycling through the array
    while (c > -1) { // loop through the array while the length of the array is positive
        if (c == 0) { // if the array length gets to 0, then the argument belongs at the final position in the array
          var l = sorted.length; // final position is equivalent to the length of the array (easier than having the script get the indexOf the final element and adding one)
          return l; } // return this final position
    var el = arr[d]; // get the value of the array element
        if (arg <= el) { // compare it to the argument, if the argument is lower or equal
          var k = sorted.indexOf(el, 0); // get the position of that element
          return k; // return the position
        } 
          else { // otherwise
          c--; // move reduce the length of the array
          d++; // and move to the next element in the array to run the comparison again
        } 
    } 
}

getIndexToIns([10, 20, 30, 40, 50], 30); 

/* -- PSEUDOCODE -- */

// sort array
// get value of argument
// sequentially compare value of argument against each array element 
// if argument is smaller than array element, get index position of that element
// return index position


/* -- ASSIGNMENT -- */

/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Here are some helpful links:

Array.prototype.sort()


getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 5, 10], 15) should return 3.
*/