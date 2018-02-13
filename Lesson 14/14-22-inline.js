/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy", function laugh(num) {
    var laughter = "";
    for (var i = 1; i <= num; i++) {
        if (i === num) {
            laughter += "ha!";
        } else {
            laughter += "ha";
        }
    }
    return laughter;
});