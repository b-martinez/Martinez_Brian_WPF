/*
 Brian Martinez
 04/16/2015
 Expressions Assignment
 Weight Loss Calculator (Per Day)
 */

//alert("Test");

//Variables
var currentWeight = Number(prompt("Enter your CURRENT weight below:"));
var goalWeight = Number(prompt("Enter your GOAL weight below:"));
var daysToGoal = Number(prompt("How many days do you have to reach your goal?"));
var poundsPerDay;

//Operations
var inputArray = [currentWeight, goalWeight, daysToGoal];

poundsPerDay = (inputArray[0] - inputArray[1]) / inputArray[2];

console.log("In order to reach your goal weight in " + daysToGoal + " days. You would need to lose " + poundsPerDay + " lbs. per day.");

