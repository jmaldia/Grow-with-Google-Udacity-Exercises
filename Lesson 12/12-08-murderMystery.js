/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Kalehoff";

var weapon = "";
var solved = false;

if (suspect === "Mr. Parkes" && room ==="dining room") {
  weapon = "knife";
    solved = true;
} else if (suspect === "Ms. Van Cleve" && room ==="gallery") {
  weapon = "trophy";
    solved = true;
} else if (suspect === "Mrs. Sparr" && room ==="billiards room") {
  weapon = "pool stick";
    solved = true;
} else if (suspect === "Mr. Kalehoff" && room ==="ballroom") {
  weapon = "poison";
    solved = true;
}

if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}