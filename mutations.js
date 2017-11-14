
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);

/* -- PSEUDOCODE -- */

// parse two elements of array into separate variables? 
// get length of each element
// while loop
    // check first letter of second element against each letter of first element
        // if not present, return false
        // else, move to next letter in second element 
// return true



/* -- ASSIGNMENT -- */

/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Here are some helpful links:

String.prototype.indexOf() */

// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.