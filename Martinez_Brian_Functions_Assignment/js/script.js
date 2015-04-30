/**
  Brian Martinez
  04/30/2015
  Functions Assignment
 */

//alert("Test!"); tested link between files


var price = Number(prompt("Enter the price of item you are purchasing."));
var quantity = Number(prompt("Enter the quantity of the item you are purchasing."));
var salesTax = Number(prompt("Enter the sales tax of the item you are purchasing.\nPlease enter in decimal form."));
var discount = Number(prompt("Enter any discount (%) if applicable.\n(Discount will be applied after taxes."));

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






