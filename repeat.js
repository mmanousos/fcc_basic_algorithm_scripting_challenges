function repeatStringNumTimes(str, num) {
    var newArr = []; // create empty array
    if (num < 0) { // check if "num" is negative
        newArr.push(""); // if it is, push empty string to "newArr"
        return newArr.toString(); // return empty string
    } else { // otherwise
        while ( num > 0 ) {  // loop through value of "num"
            newArr.push(str); // add "str" to array
            num--; // decrease "num" until 0
        } return newArr.join(""); // return contents of array as joined string
    }
}

repeatStringNumTimes("abc", 3);

// create new array
// check if "num" is a positive #
    // if no, return empty string from array
    // if yes, push str to array & reduce num by 1 to repeat. 
    


/* Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".
