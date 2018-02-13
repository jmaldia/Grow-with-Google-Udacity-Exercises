var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "knife";
var solved = false;

if (room == "dining room" && suspect == "Mr. Parkes") {
   weapon = "knife";
   solved = true;
} else if (room == "the ballroom" && suspect == "Mr. Kalehoff"/* your conditional goes here */) {
   weapon = "poison"
   solved = true;
} else if (room == "gallery" && suspect == "Ms. Van Cleve"/* your conditional goes here */) {
   weapon = "trophy";
   solved = true;
} else if (room == "billiards room" && suspect == "Mrs. Sparr") {
   weapon = "pool stick";
   solved = true;
} else {
   solved = false;
}

if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}