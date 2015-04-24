/*
Brian Martinez
04/23/2015
Conditionals Assignment
 */

//alert("Test!");

var entry = prompt("Did you want to enter the venue today?");
if(entry === "") {
    entry = prompt("I'm sorry I didn't catch that. Did you want to enter the venue today?");
    if (entry === "Yes"){
        var childsAge = Number(prompt("Enter your CURRENT age here:"));
        var timeRemaining = 18 - childsAge;

        