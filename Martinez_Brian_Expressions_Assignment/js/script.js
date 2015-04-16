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

var incWeek = daysToGoal += 7;

var decWeek = daysToGoal -= 14;

var extraDays = (inputArray[0] - inputArray[1]) / incWeek;

var decDays = (inputArray[0] - inputArray[1]) / decWeek;

//Outputs

console.log("If you INCREASED your days by a week (" + incWeek + " days). You could lose " + extraDays + " lbs. per day.");

console.log("If you DECREASED your days by a week (" + decWeek + " days). You would need to lose " + decDays + " lbs. per day.");

//Test Results
/* I typed in 250 for CURRENT weight and 210 for GOAL weight and 14 days to goal and my calculator told me to lose 2.857142857142857 pounds per day to reach my goal.
 * I typed in 300 for CURRENT weight and 210 for GOAL weight and 30 days to goal and my calculator told me to lose 3 pounds per day to reach my goal.
 * I typed in 169 for CURRENT weight and 150 for GOAL weight and 33 days to goal and my calculator told me to lose 0.575 pounds per day to reach my goal.
 * */