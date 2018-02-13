/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Jon",
    friends: 2,
    messages: ["my message"],
    postMessage: function(message) {
        facebookProfile.messages.push(message)
    },
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function() {
        facebookProfile.friends += 1;
    },
    removeFriend: function() {
        facebookProfile.friends -= 1;
    }
};

console.log(facebookProfile.friends);

facebookProfile.addFriend();

console.log(facebookProfile.friends);

console.log(facebookProfile.messages);

facebookProfile.postMessage("This is my message");

console.log(facebookProfile.messages);

facebookProfile.deleteMessage(0);

console.log(facebookProfile.messages);