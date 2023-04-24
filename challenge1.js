// Challenge 1
// print words with 4 or more characters from an array of strings
// create array of strings with some words containing more than 4 charachaters, and other less than 4 characters
// use for loop to loop through every word in array
// if word has >=4 characters, print word
var foods = ["tacos", "cereal", "pho", "rice", "beans", "fig"]

for (var i = 0; i < foods.length; i++) {
    if (foods[i].length >= 4) {
        console.log(foods[i]);
    }
}

// prints all words in array with >=4
// returns "tacos", "cereal", "rice", "beans"