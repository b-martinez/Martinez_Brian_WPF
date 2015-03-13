/*
Brian Martinez
03/12/15
Expressions Assignment
 */

//alert("Test"); used to test link to html file

//Variables
var currentWeight = Number(prompt("Enter your CURRENT weight here:"));
var goalWeight = Number(prompt("Enter your GOAL weight here:"));
var daysToGoal = Number(prompt("How many days do you have to reach your goal?"));
var poundsPerDay;

//Operations

var inputArray = [currentWeight, goalWeight, daysToGoal];

poundsPerDay = (inputArray[0] - inputArray[1]) / inputArray[2];

console.log(poundsPerDay);



