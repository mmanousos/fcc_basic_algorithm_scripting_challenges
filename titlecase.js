function titleCase(str) {
    var low = str.toLowerCase();  // lowercase everything
    var ary = low.split(" "); // split string into array
    var count = ary.length; // count items in array
    var i = 0; 
    var word = ary[i]; 
    var capitalize = []; // array to return
    while (count > 0) { // while loop based on # of items in array
        var char = ary[i].charAt(0); // access first letter of word in array 
        var up = char.toUpperCase(); // capitalize fist letter
        capitalize.push(up); // add uppercase letter to new array
        count--; // decrease # of items in array
        i++ // increase array index #
        console.log("current word is " + ary[i] );
        
    }  var titleCase = capitalize.join(" "); // join array back to string 
       console.log(titleCase);
        return titleCase; // return title case string 
}

/* currently creates new array and pushes only capitalized letters into the array, returns as a string. 
/* need to push capitalized letters back to original array instead. 

titleCase("I'm a little tea pot");


/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".



