"use strict";

// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need.
var bulbasaur = 11;
var caterpieCandies = 6;
var weedCandies = 6;
var totalCandies = bulbasaur + caterpieCandies + weedCandies;
console.log(totalCandies); //Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function tempConvert(f) {
  return (f - 32) * 5 / 9;
}

console.log(tempConvert(290));

function canCharBattle(temVal) {
  var temperature = tempConvert(temVal);

  if (temperature > 0) {
    console.log('Char can battle');
  } else {
    console.log('Char can"t battle');
  }
}

canCharBattle(31); //Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function undegroundPokemonLeaugeme(num) {
  // let i = 1; i <= num; i++
  for (var i = 0; i < num; i++) {
    console.log('Pichachu, I choose you');
  }
}

undegroundPokemonLeaugeme(6);