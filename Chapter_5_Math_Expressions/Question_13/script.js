var favSnack = "chocolate chip";
var currentAge = 14;
var maxAge = 100;
var amountPerDay = 3;

document.write("<h1>The Lifetime Snack Supply Calculator</h1> <br/> <br/>");
document.write(`Favourite Snack: ${favSnack} <br/>`);
document.write(`Current age: ${currentAge} <br/>`);
document.write(`Estimated Maximum Age: ${maxAge} <br/>`);
document.write(`Amount of snacks per day: ${amountPerDay} <br/>`);
document.write(`You will need ${(maxAge - currentAge) * amountPerDay * 365} ${favSnack} to last you until the ripe old age of ${maxAge}.`);