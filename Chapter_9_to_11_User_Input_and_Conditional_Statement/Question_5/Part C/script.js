var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
        alert("condition 3 is true");
        }

// Output:
//

// Reason: This script produces np output because b++ is post-increment and post-increment means first use and then update. That's why the condition becomes false.
