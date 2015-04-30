/**
  Brian Martinez
  04/30/2015
  Functions Assignment
 */

//alert("Test!"); tested link between files


var price = Number(prompt("Enter the price of item you are purchasing.")); //prompt for price
var quantity = Number(prompt("Enter the quantity of the item you are purchasing.")); //prompt for quantity
var salesTax = Number(prompt("Enter the sales tax of the item you are purchasing.\nPlease enter in decimal form.")); //prompt for sales tax
var discount = Number(prompt("Enter any discount (%) if applicable.\n(Discount will be applied after taxes.)")); //prompt for discount

var purchase = totalCost(price, quantity, salesTax); //return value
function totalCost(price, quantity, salesTax){ //function to calculate total cost
    var subTotal = (price * quantity); //calculation for subtotal
    var tax = (subTotal * salesTax); //calculation for sales tax
    var purchase = subTotal + tax; //calculation adding subtotal and sales tax
    return purchase; //function is spitting out this info

}

totalCost(price, quantity, salesTax); //invocating function

console.log("The total price of your purchase is $" + purchase + "."); //printing results to console

var discountCost = function(purchase, discount){ //anonymous function
    var convPer = discount / 100; //convert whole number to percentage
    var disOrder = purchase * convPer; //finding amount to discount
    var newAmount = purchase - disOrder; //subtracting discount amount from original amount
    return newAmount; //return value
}

var newAmount = discountCost(purchase, discount); //return value

console.log("Your new amount after the discount is applied is $" + newAmount + "."); //printing out to console

/*Test Values
I typed in 2 for price of item, 2 for quantity, .10 for sales tax and 50 for discount. Calculator returned $4.4 for my total cost and $2.2 for my new cost after discount.
 I typed in 29.99 for price of item, 3 for quantity, .0875 for sales tax and 0 for discount. Calculator returned $97.84 for my total cost and $97.84 for my new cost after discount.
 I typed in 5 for price of item, 10 for quantity, .09 for sales tax and 25 for discount. Calculator returned $54.50 for my total cost and $40.88 for my new cost after discount.
 */



