/* Final solution that works for additional, longer "num" arguments */ 

function truncateString(str, num) {
    var i = str.length;
    if (i > num) {
        if (num <= 3) {
           var j = str.substring(0,num);
           var newStr = (j + "...");
            return newStr;
        } else {
            var k = str.substring(0,num-3);
            var altNewStr = (k + "...");
            return altNewStr;
        }
    } return str;
}

truncateString("Absolutely Longer", 2);


/* Solution works for numerical "num" arguments shorter than "str" but doesn't account for longer options */

function truncateString(str, num) {
    var i = str.length;
    if (i > num) {
        if (num <= 3) {
           var j = str.substring(0,num);
            console.log(j);  
        } else {
            var j = str.substring(0,num-3);
            console.log(k);    
        } var newStr = (j + "...");
    } return newStr;
}

truncateString("Absolutely Longer", 2);

/* -- PSEUDOCODE -- */

// get length of string
// check against "num" 
// if num > string
    // if num is <= 3      
        // create substring only as long as "num" 
        
    // else 
        // create substring shorter than "num" by 3

    // add three dots
// return new substring



/* -- ASSIGNMENT -- */
/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.


Here are some helpful links:

String.prototype.slice() */


// truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
// truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-", 1) should return "A...".
// truncateString("Absolutely Longer", 2) should return "Ab...".