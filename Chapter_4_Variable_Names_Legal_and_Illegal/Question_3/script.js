// Rules (Variables)
var rule1 = "numbers";
var rule2 = "$";
var rule3 = "_";
var rule4 = "letter";
var rule5 = "sensitive";
var rule6 = "keywords";

// Rules for naming variables
document.write("<h2>Rules for naming JS Variables</h2> <br/>")
document.write(`<br/> Variable names can only contain, ${rule1}, ${rule2} and ${rule3} . For example : $my_1stVariable <br/>`);
document.write(`Variable must begin with a ${rule4}, ${rule2} or ${rule3} . For example : $name, _name or name <br/>`);
document.write(`Variable names are case ${rule5} <br/>`);
document.write(`Variable names should not be JS ${rule6}`);