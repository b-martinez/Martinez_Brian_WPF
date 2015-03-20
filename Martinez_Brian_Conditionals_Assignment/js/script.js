/*
 Brian Martinez
 03/19/15
 Conditionals Assignment

 */

//alert("Test"); //used to test link to html file

//Variables
var entry = prompt("Did you want to enter the venue today?"); //prompt to ask if entering the venue
if(entry === "") { //validating prompt
    entry = prompt("I'm sorry I didn't catch that. Did you want to enter the venue today?");
    if (entry === "Yes"){ //If user enter yes will use next code block.
        var childsAge = Number(prompt("Enter your CURRENT age here:")); //Asks what the user age is.
        var timeRemaining = 18 - childsAge; //calculation to figure out how much longer till they are 18 years old.

        if(childsAge < 18){ //if less than 18 yrs old will use this code block.
            var wParent = prompt("Is your parent currently with you? Yes if True and No if False."); //prompt asking if parents with you today.
            if(wParent === ""){ //validates prompt
                wParent = prompt("Please enter if your parent(s) are currently here with you? Yes if True and No if False.");
                if(childsAge < 18 && wParent === "Yes"){ //using logical operator &&
                    console.log("Great your parents are here! You may enter! Remember you have another " + timeRemaining + " years before you can come alone."); //output
                    var tokens = prompt("Did you want tokens to play the games inside? Yes or No."); //prompt asking if user will purchase game tokens.
                    if (tokens === ""){ //validating prompt
                        tokens = prompt("Did you want to purchase tokens today? Yes or No.");
                        if (tokens === "Yes"){ //if entered yes will use this code block.
                            var amountTokens = Number(prompt("How many tokens did you want to purchase? (Note: Each token costs $0.25) Enter a number."));
                            var tokensTotal = amountTokens * 0.25;
                            console.log("You will purchase " + amountTokens + " tokens. At a total cost of $" + tokensTotal + "."); //output for number and total cost of tokens.

                        }else{
                            console.log("Maybe next time!"); //if user enters No for token purchase.
                        }
                    }
                }else if(childsAge < 18 && wParent === "No"){ //returns this block if user is underage and does not have their parents.
                    console.log("I'm sorry you are underage and your parent's are not here. You may not enter the venue. You have to wait another " + timeRemaining + " years before you can come alone.");
                }else{

                }

            }
        }else{
            console.log("You are of age, you may enter the venue."); //user is of age
            var tokens = prompt("Did you want tokens to play the games inside? Yes or No."); //asking for token purchase
            if (tokens === "") { //validating prompt
                tokens = prompt("Did you want to purchase tokens today? Yes or No.");
                if (tokens === "Yes"){ //use this block if user enters yes
                    var amountTokens = Number(prompt("How many tokens did you want to purchase? (Note: Each token costs $0.25) Enter a number."));
                    var tokensTotal = amountTokens * 0.25;
                    console.log("You will purchase " + amountTokens + " tokens. At a total cost of $" + tokensTotal + "."); //total output with number and cost of tokens.

                }else{
                    console.log("Maybe next time!"); //if user enters No to prompt above.
                }
            }
        }
    }else{
        console.log("Thank you come again!"); //if user decides to not enter the venue.
    }
}











