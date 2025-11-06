# Question 5 – Variables for Strings

This exercise practices declaring a string variable with newline characters and displaying it with an alert dialog.

## Files
- `index.html`: Minimal HTML that includes `script.js`
- `script.js`: JavaScript for this question - declares a variable with a pattern of decreasing letters and shows it in an alert

## How to Run
- Open `index.html` in your browser
- Or use VS Code Live Server: right-click `index.html` → Open with Live Server

## Code Explanation
The script demonstrates:
- Variable declaration with initialization containing newline characters: `var text = "PIZZA\\nPIZZ\\nPIZ\\nPI\\nP";`
- Using escape sequences (`\\n`) to create multiple lines in a string
- Displaying the multi-line string in an alert dialog

## Expected Output
An alert dialog will appear showing:
```
PIZZA
PIZZ
PIZ
PI
P
```
Each word appears on a separate line due to the newline characters.

## Learning Objectives
- Understand escape sequences in JavaScript strings
- Practice using newline characters (`\\n`) in strings
- See how multi-line strings are displayed in alerts
- Learn string formatting with escape characters

## Tips
- The `\\n` represents a line break in the string
- Try changing the word from "PIZZA" to something else
- You can also use `console.log(text)` to see the output in the browser console