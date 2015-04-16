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



//Slice of Pizza Example 2
/*
 Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices
 and Sparky gets 2 slices.
 */


//Variables
var attendeesPartII = 10;
var pizzasOrdered = 4;
var slicesPerPizza = 8;
var sparkyEats;

//Operations
var slicesPerPerson = (slicesPerPizza * pizzasOrdered);
sparkyEats = slicesPerPerson % 10;

console.log("Sparky got " + sparkyEats + " " + "of pizza.");


//Average Shopping Bill

//Variable
var week1 = Number(prompt("Enter amount spent on groceries in Week 1:"));
var week2 = Number(prompt("Enter amount spent on groceries in Week 2:"));
var week3 = Number(prompt("Enter amount spent on groceries in Week 3:"));
var week4 = Number(prompt("Enter amount spent on groceries in Week 4:"));
var week5 = Number(prompt("Enter amount spent on groceries in Week 5:"));
var groceryArray = [week1, week2, week3, week4, week5];

var groceryTotal = groceryArray[0] + groceryArray[1] + groceryArray[2] + groceryArray[3] + groceryArray[4];

var groceryAvg = (groceryArray[0] + groceryArray[1] + groceryArray[2] + groceryArray[3] + groceryArray[4]) / 5;

console.log("You have spent a total of $" + groceryTotal + " " + "on groceries over 5 weeks. That is an average of $" + groceryAvg + " " + "per week.");






