/*
Brian Martinez
04/23/2015
Conditionals Assignment
 */

//alert("Test!"); //used to link html and js files

var entry = prompt("Did you want to enter the venue today?"); //Prompt
if(entry === "") { //validating prior prompt if left empty
    entry = prompt("I'm sorry I didn't catch that. Did you want to enter the venue today?\nPlease enter Yes or No."); //prompt re-asking question
    if (entry === "Yes") { //if user enters Yes use this block of code.
        var childsAge = Number(prompt("Enter your CURRENT age here:")); //prompt asking for age
        var timeRemaining = 18 - childsAge; //calculation to determine how much time child needs to wait before coming alone.
        console.log(timeRemaining + " years left to enter alone."); //printing result to console

        if (childsAge < 18) { //if less than 18 years old, use this block
            var wParent = prompt("Is your parent currently with you? Yes if True and No if False."); //prompt asking if you are with your parent(s)
            if (wParent === "") { //validating prompt
                wParent = prompt("Please enter if your parent(s) are currently here with you? Yes if True and No if False."); //prompt asking again prior question
                if (childsAge < 18 && wParent === "Yes") { //using logical operator
                    console.log("Great your parents are here! You may enter! Remember you have another " + timeRemaining + " years before you can come alone."); //printing result to console
                    var tokens = prompt("Did you want tokens to play the games inside? Yes or No."); //prompt asking if you will purchase tokens
                    if (tokens === "") { //validating prompt
                        tokens = prompt("Did you want to purchase tokens today? Yes or No."); //prompt asking question again after validation
                        if (tokens === "Yes") { //If user enters yes use this code
                            var amountTokens = Number(prompt("How many tokens did you want to purchase? (Note: Each token costs $0.25) Enter a number.")); //prompt asking for # of tokens that will be bought
                            var tokensTotal = amountTokens * 0.25; //calculation to determine cost of purchase
                            console.log("You will purchase " + amountTokens + " tokens. At a total cost of $" + tokensTotal + "."); //printing results to console

                        } else { //If user enters No
                            console.log("Maybe next time!"); //printing result to console if user enters No
                        }
                    }
                } else if (childsAge < 18 && wParent === "No") { //use this code if user is underage and parent(s) are not present.
                    console.log("I'm sorry you are underage and your parents are not here. You may not enter the venue. You have to wait another " + timeRemaining + " years before you can come alone."); //printing result to console
                }

            }
        } else { //If user is 18 or older
            console.log("You are of age, you may enter the venue."); //Printing result to console
            var tokens = prompt("Did you want tokens to play the games inside? Yes or No."); //Prompt asking if you would like to buy tokens
            if (tokens === "") { //validating prompt
                tokens = prompt("Did you want to purchase tokens today? Yes or No."); //prompt asking question again after validation
                if (tokens === "Yes") { //if user enters Yes
                    var amountTokens = Number(prompt("How many tokens did you want to purchase? (Note: Each token costs $0.25) Enter a number.")); //prompt asking # of tokens that will be bought
                    var tokensTotal = amountTokens * 0.25; //calculation to determine total cost of purchase.
                    console.log("You will purchase " + amountTokens + " tokens. At a total cost of $" + tokensTotal + "."); //printing result to console
                }else{ //if user enters No
                    console.log("You can come back if you change your mind to buy tokens."); //printing result
                }
            } else {
                console.log("Maybe next time!");//printing result
            }
        }
    } else {
        console.log("Thank you come again!");//printing result
    }

}
    /*Test Results
    I typed in YES to enter and 14 for my age without my parents. My calculator returned I'm sorry you are underage and your parents are not here. You may not enter the venue. You have to wait another 4 years before you can come alone.

    I typed in YES to enter and 18 for my age. My calculator asked me how many tokens I would like to purchase. I entered 4 and it returned You will purchase 4 tokens. At a total cost of $1.

    I typed in YES to enter and 14 for my age with my parents. My calculator asked me how many tokens I would like to purchase. I entered 8 and it returned Great your parents are here! You may enter! Remember you have another 2 years before you can come alone.
     script.js (line 22)
     You will purchase 8 tokens. At a total cost of $2.

     */

