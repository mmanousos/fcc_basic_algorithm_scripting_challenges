function mutation(arr) {
    var b = arr[1].length;
    var h = 0;
    var i = arr[1].charAt(h); // get value of specific character in array
    var j = arr[0].indexOf(i, 0); // runs through entire array checking for specified value
    if (j < 0 ) {
      return false;
        } else {
            while (b > 0) {
              h++;
              b--;     
            }
        }  return true; 
    }

mutation(["hello", "hey"]);




/* -- PSEUDOCODE using indexOf -- */
/* e.g. var result = pens.indexOf(“orange”, 1); */
/* returns position of value in array -> not helpful for my logic */

// get first letter of second element in array (charAt) 
    // loop through and compare to letters in first element in array - using indexOf
        // at end of loop, if letter not present, return false
        // else loop to next letter in second element
// return true


/* -- PSEUDOCODE using while loop only -- */

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