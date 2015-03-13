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

console.log("In order to reach your goal weight in " + daysToGoal + " days. You would need to lose " + poundsPerDay + " lbs. per day.");

var incWeek = daysToGoal += 7;

var decWeek = daysToGoal -= 14;

//console.log(incWeek, decWeek);

var extraDays = (inputArray[0] - inputArray[1]) / incWeek;

var decDays = (inputArray[0] - inputArray[1]) / decWeek;


//Output

console.log("If you INCREASED your days by a week (" + incWeek + " days). You could lose " + extraDays + "lbs. per day.");

console.log("If you DECREASED your days by a week (" + decWeek + " days). You would need to lose " + decDays + "lbs. per day.");


//Test Results
/* I typed in 220 for CURRENT weight and 205 for GOAL weight and 30 days to goal and my calculator told me to lose 0.5 pounds per day to reach my goal.
*I typed in 300 for CURRENT weight and 210 for GOAL weight and 30 days to goal and my calculator told me to lose 3 pounds per day to reach my goal.
* I typed in 169 for CURRENT weight and 150 for GOAL weight and 33 days to goal and my calculator told me to lose 0.575 pounds per day to reach my goal.
* */


