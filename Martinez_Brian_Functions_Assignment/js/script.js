/**
  Brian Martinez
  04/30/2015
  Functions Assignment
 */

//alert("Test!"); tested link between files


var price = Number(prompt("Enter the price of item you are purchasing."));
var quantity = Number(prompt("Enter the quantity of the item you are purchasing."));
var salesTax = Number(prompt("Enter the sales tax of the item you are purchasing.\nPlease enter in decimal form."));
var discount = Number(prompt("Enter any discount (%) if applicable.\n(Discount will be applied after taxes.)"));

var purchase = totalCost(price, quantity, salesTax);
function totalCost(price, quantity, salesTax){
    var subTotal = (price * quantity);
    var tax = (subTotal * salesTax);
    var purchase = subTotal + tax;
    return purchase;

}

totalCost(price, quantity, salesTax);

console.log("The total price of your purchase is $" + purchase + ".");

var discountCost = function(purchase, discount){
    var convPer = discount / 100;
    var disOrder = purchase * convPer;
    var newAmount = purchase - disOrder;
    return newAmount;
}

var newAmount = discountCost(purchase, discount);

console.log("Your new amount after the discount is applied is $" + newAmount + ".");

/*Test Values
I typed in 2 for price of item, 2 for quantity, .10 for sales tax and 50 for discount. Calculator returned $4.4 for my total cost and $2.2 for my new cost after discount.
 I typed in 29.99 for price of item, 3 for quantity, .0875 for sales tax and 0 for discount. Calculator returned $97.84 for my total cost and $97.84 for my new cost after discount.
 I typed in 5 for price of item, 10 for quantity, .09 for sales tax and 25 for discount. Calculator returned $54.50 for my total cost and $40.88 for my new cost after discount.
 */



