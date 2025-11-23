var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write(`a is ${a} <br>`);
document.write(`b is ${b} <br>`);
document.write(`result is ${result} <br>`);

// --a; In this line a is decremented by 1, so a becomes 1
// --a - --b; In this line b is decremented by 1, so b becomes 0. Now the expression is 1 - 0 = 1
// --a - --b + ++b; In this line b is incremented by 1, so b becomes 1. Now the expression is 1 - 0 + 1 = 2
// --a - --b + ++b + b--; In this line the current value of b (which is 1) is used in the expression, and then b is decremented by 1, so b becomes 0. Now the expression is 1 - 0 + 1 + 1 = 3

// In this program,
// First a is decremented by 1, so a becomes 1
// Then b is decremented by 1, so b becomes 0
// Then b is incremented by 1, so b becomes 1
// Finally, the current value of b (which is 1) is used in the expression, and then b is decremented by 1, so b becomes 0

// The final value of a after the excution of script is 1
// The final value of b after the excution of script is 0