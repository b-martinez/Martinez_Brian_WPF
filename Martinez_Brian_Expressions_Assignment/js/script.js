/*
Brian Martinez
03/12/15
Expressions Assignment
 */

//alert("Test"); used to test link to html file

//Variables
var currentWeight = Number(prompt("Enter your CURRENT weight here:")); //creating variable using prompt
var goalWeight = Number(prompt("Enter your GOAL weight here:")); //creating variable using prompt
var daysToGoal = Number(prompt("How many days do you have to reach your goal?")); //creating variable using prompt
var poundsPerDay; //my result variable

//Operations

var inputArray = [currentWeight, goalWeight, daysToGoal]; //created an array to use for calculations

poundsPerDay = (inputArray[0] - inputArray[1]) / inputArray[2]; //formula to find result variable using my array.

console.log("In order to reach your goal weight in " + daysToGoal + " days. You would need to lose " + poundsPerDay + " lbs. per day."); //printing out to console my results.

var incWeek = daysToGoal += 7; //using assignment operator to increase

var decWeek = daysToGoal -= 14; //using assignment operator to decrease

//console.log(incWeek, decWeek);

var extraDays = (inputArray[0] - inputArray[1]) / incWeek; //formula to find result using new days

var decDays = (inputArray[0] - inputArray[1]) / decWeek; //formula to find result using new days


//Output

console.log("If you INCREASED your days by a week (" + incWeek + " days). You could lose " + extraDays + "lbs. per day."); //printing out my new results as suggestions

console.log("If you DECREASED your days by a week (" + decWeek + " days). You would need to lose " + decDays + "lbs. per day."); //printing out my new results as suggestions


//Test Results
/* I typed in 220 for CURRENT weight and 205 for GOAL weight and 30 days to goal and my calculator told me to lose 0.5 pounds per day to reach my goal.
*I typed in 300 for CURRENT weight and 210 for GOAL weight and 30 days to goal and my calculator told me to lose 3 pounds per day to reach my goal.
* I typed in 169 for CURRENT weight and 150 for GOAL weight and 33 days to goal and my calculator told me to lose 0.575 pounds per day to reach my goal.
* */


