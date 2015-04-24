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

        if(childsAge < 18) {
            var wParent = prompt("Is your parent currently with you? Yes if True and No if False.");
            if (wParent === "") {
                wParent = prompt("Please enter if your parent(s) are currently here with you? Yes if True and No if False.");
                if (childsAge < 18 && wParent === "Yes") {
                    console.log("Great your parents are here! You may enter! Remember you have another " + timeRemaining + " years before you can come alone.");
                    var tokens = prompt("Did you want tokens to play the games inside? Yes or No.");
                    if (tokens === "") {
                        tokens = prompt("Did you want to purchase tokens today? Yes or No.");
                        if (tokens === "Yes") {
                            var amountTokens = Number(prompt("How many tokens did you want to purchase? (Note: Each token costs $0.25) Enter a number."));
                            var tokensTotal = amountTokens * 0.25;
                            console.log("You will purchase " + amountTokens + " tokens. At a total cost of $" + tokensTotal + ".");

                        } else {
                            console.log("Maybe next time!");
                        }
                    }
                } else if (childsAge < 18 && wParent === "No") {
                    console.log("I'm sorry you are underage and your parent's are not here. You may not enter the venue. You have to wait another " + timeRemaining + " years before you can come alone.");
                }

            }
        }