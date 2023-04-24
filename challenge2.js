// Challenge 2
// print all words in array of strings as lowercase letters
// create array of strings with a mix of upper and lowercase letters
// using the method toLowerCase() covert uppercase strings to lowercase
var greetings = ["Nice to meet you", "Welcome Home", "Enjoy your Stay"];

var lowerCaseGreetings = [];

greetings.forEach(greetings => lowerCaseGreetings.push(greetings.toLowerCase()));

console.log(lowerCaseGreetings);

// returns ['nice to meet you', 'welcome home', 'enjoy your stay']
