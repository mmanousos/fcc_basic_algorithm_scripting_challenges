/* cycles through too many times, winding up at undefined. */

function largestOfFour(arr) {
    var largestArray = []; // create empty array to hold final results   
    var i = arr.length; // get length of array 
    var j = 0; // sub array 
    var k = 0; // position in sub array
    var l = arr[j].length;  // get length of sub array  
    var largest = arr[j][k]; // sets first number in first sub array as largest
    var next = arr[j][k+1]; // gets next number in array
 for (var m = l; m > 0; m--) { // loop through sub array elements as long as array has more than 1 value 
     
    // check relative values of array elements
    if (largest > next) {  // if largest number is larger than next
            k++;     // skip to next position in array & re-run loop to check again
              console.log("current position in array is " + k);
        } else {  // otherwise
            largest = next; // set "next" number as largest 
                console.log("current largest value is " + largest);
            k++; // move to next position in sub array
                console.log("current position in array is " + k);
            var following = arr[j][k+1]; // get next number and call it "following"
                console.log("current following value is " + following);
            next = following; // set "next" as "following" & re-run loop to check again
                console.log("current next value is " + next);
            } largestArray.push(largest); // push resulting largest number to new array      
    }   return largestArray; // return array of largest numbers from sub arrays
} 


largestOfFour([[32, 35, 37, 39], [4, 5, 1, 3], [13, 27, 18, 26], [1000, 1001, 857, 1]]);


        
 
/* -- PSEUDO CODE --*/
// create new array to hold final result
// access first number of first sub array
// set first number as largest
// compare to second number 
// if second number is smaller, continue by moving to next number 
// if second number is larger, set as new largest number 
    // ceate additional variable to hold new next number & reassign to next
// check again (using loop)
// at end of array (after all numbers have been checked), push to new array (checking that there are no additional numbers before pushing)
// move to next sub array (checking that there are more arrays to move to)
// return new array with final result

  

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

/* largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000]. */



