var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

// Output 1:
//

// Reason: The first code block produces no output because b++ is post-increment and post-increment means first use and then update. That's why the condition becomes false.

// Output 2:
// condition 2 is true

// Reason: The second code block produces output because b is now updated by post-increment and post-increment means first use and then update. That's why the condition becomes true.

// Output 3:
//

// Reason: The third code block produces no output because ++b is pre-increment and pre-increment means first update and then use it as well. That's why the condition becomes false. Because it was updated.

// Output 4:
// condition 4 is true

// Reason: This script produces output because b now updated by pre-increment and pre-increment means first update and then use it as well. That's why the condition becomes true. Because it was updated.