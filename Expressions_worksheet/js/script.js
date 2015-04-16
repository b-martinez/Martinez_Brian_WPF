/*
 * Brian Martinez
 * 04/16/2015
 * Expressions worksheet
 */


//alert("Test!");

//Dog Years Example
//Figure out Sparky's age from human years to dog years

//Variables
var sparkyHuman;

//Prompts
sparkyHuman = prompt("Enter Sparky's Age here:");

var sparkyDog = Number(sparkyHuman) * 7;

//Output
console.log("Sparky is " + sparkyHuman + " " + "human years old which is " + sparkyDog + " " + "in dog years.");

//Slice of Pizza Example 1

//Variables for number of slices per pizza, people at the party, and number of pizzas ordered
var slices = Number(prompt("Enter number of slices per pizza:"));
var attendees = Number(prompt("How many people attended the pizza party?"));
var pizzas = Number(prompt("How many pizzas were ordered:"));

//Operations
var slicesPerPerson = (slices * pizzas) / attendees;

//Output
console.log("Each person ate " + slicesPerPerson + " " + "slices of pizza at the party.");



