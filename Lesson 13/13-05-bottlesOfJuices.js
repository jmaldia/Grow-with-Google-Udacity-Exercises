/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var bottle = " bottle of juice";
var bottles = " bottles of juice";
var onTheWall = " on the wall!";
var takeOneDown = "! Take one down, pass it around... ";

while (num > 0) {
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
    if (num === 2) {
        console.log(num + bottles + onTheWall + " " + num + bottles + takeOneDown + (num - 1) + bottle + onTheWall);
    } else if (num === 1) {
        console.log(num + bottle + onTheWall + " " + num + bottle + takeOneDown + (num - 1) + bottles + onTheWall);
    } else {
        console.log(num + bottles + onTheWall + " " + num + bottles + takeOneDown + (num - 1) + bottles + onTheWall);
    }
    
    num--;
}