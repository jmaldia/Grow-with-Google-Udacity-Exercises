/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */
 
 function laugh(num) {
    var laughs = "";
     
    for (var i = num; i > 0; i--) {
        laughs += "ha";
    }
    
    return laughs + "!";
 }


console.log(laugh(10));


function emotions(myString, myFunc) {
   console.log("I am " + myString + ", " + myFunc(2));
   return "";
}

var laugh = function(count){
}

console.log(emotions("happy", function(count) {
    var message="";
    for (var x=1; x<=count; x++){
    	message +="ha";
    }

    return message;
}));