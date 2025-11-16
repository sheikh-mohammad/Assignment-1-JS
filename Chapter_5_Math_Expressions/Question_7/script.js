var price1 = 650;
var price2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shippingCharges = 100;

document.write("<h1> Shipping Cart </h1> <br/> <br/>");
document.write(`Price of item 1 is ${price1} <br/>`);
document.write(`Quantity of item 1 is ${quantity1} <br/>`);
document.write(`Price of item 1 is ${price2} <br/>`);
document.write(`Quantity of item 1 is ${quantity2} <br/>`);
document.write(`Shipping Charges ${shippingCharges} <br/>`);
document.write(`<br/> Total cost of your order is ${(price1 * quantity1) + (price2 * quantity2) + shippingCharges}`);