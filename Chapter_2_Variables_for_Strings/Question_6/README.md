# Question 6 – Variables for Strings

This exercise practices declaring a string variable, assigning an email value, and concatenating it with another string for display.

## Files
- `index.html`: Minimal HTML that includes `script.js`
- `script.js`: JavaScript for this question - declares an email variable and concatenates it with a message in an alert

## How to Run
- Open `index.html` in your browser
- Or use VS Code Live Server: right-click `index.html` → Open with Live Server

## Code Explanation
The script demonstrates:
- Variable declaration without initialization: `var email;`
- Assigning an email address string to the variable: `email = "haji08307@gmail.com";`
- String concatenation using the `+` operator: `"My email address is " + email`
- Displaying the concatenated result in an alert dialog

## Expected Output
An alert dialog will appear showing: "My email address is haji08307@gmail.com"

## Learning Objectives
- Practice variable declaration and assignment
- Understand string concatenation with the `+` operator
- Learn how to combine static text with variable values
- See how variables can be used within function arguments

## Tips
- The `+` operator combines strings together
- You can change the email address to test with different values
- Try concatenating multiple variables together
- Consider using template literals (ES6) as an alternative: `My email address is ${email}`