// Challenge 3
// print array to capitalize first letter in every word
// create string array containing all lowercase letters
// use function splice() to seperate first characters from rest of string for each word
// use map() method to iterate over array
// use the toUpperCase() method to uppercase the first letter of each word.
// finally, use the join() method to join array into string
var greetingLowerCase = 'welcome to the beginning of the rest of your life!';

var stringToArray = greetingLowerCase.split(' ');

var greetingUpperCase = stringToArray.map(word => word[0].toUpperCase() + word.substring(1));

var newString = greetingUpperCase.join(' ')

console.log(newString);

// returns "Welcome To The Beginning Of The Rest Of Your Life!"

  