/*
For this quiz, use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

You must use articleList to navigate to the element(s)!
*/

// Start with these variable!
var articleList, h1, kids, parents;

articleList = $('.article-list');

h1 = articleList.siblings();// Your code goes here!
console.log(h1);

kids = articleList.children();// Your code goes here!
console.log(kids);

parents = articleList.parents();// Your code goes here!
console.log(parents);