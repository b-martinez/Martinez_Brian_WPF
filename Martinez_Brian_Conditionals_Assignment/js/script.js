/*
 Brian Martinez
 03/19/15
 Conditionals Assignment

 */

//alert("Test"); //used to test link to html file

//Variables
var childsAge = Number(prompt("Enter your CURRENT age here:")); //creating variable using prompt
var entry = true; //my result variable

//Conditionals

var timeRemaining = 18 - childsAge;

(childsAge >= 18) ? console.log ("You are of age, you MAY enter the venue! Have fun!") : console.log("I'm sorry kid you need to wait another " + timeRemaining + " years to come in alone.");

if(childsAge < 18){
    var wParent = prompt("Is your parent currently with you? Yes if True and No if False.");
    if(wParent === ""){
        wParent = prompt("Please enter if your parent(s) are currently here with you? Yes if True and No if False.");
        if(childsAge < 18 && wParent === "Yes"){
            console.log("Great your parents are here! You may enter!");
        }else if(childsAge < 18 && wParent === "No"){
            console.log("I'm sorry you are underage and your parent's are not here. You may not enter the venue.");
        }else{

        }

    }
}else{
    console.log("You are of age, you may enter the venue.");
}
    console.log("Thank you, please come again soon!");

