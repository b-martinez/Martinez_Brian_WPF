/*
 Brian Martinez
 03/19/15
 Conditionals Assignment

 */

//alert("Test"); //used to test link to html file

//Variables
var childsAge = Number(prompt("Enter your CURRENT age here:")); //creating variable using prompt
var parentAge = Number(prompt("Enter your PARENT'S age here:")); //creating variable using prompt
var wParent = prompt("Is your parent with you currently?"); //creating variable using prompt
var entry; //my result variable

console.log(childsAge, parentAge);

//Conditionals

(childsAge >= 18) ? console.log ("You are of age, you MAY enter the venue! Have fun!") : console.log("I'm sorry kid you need to grow up some more!");
