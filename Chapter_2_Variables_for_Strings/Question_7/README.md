# Question 7 – Variables for Strings

This exercise practices declaring a string variable for a book title and concatenating it with a message for display.

## Files
- `index.html`: Minimal HTML that includes `script.js`
- `script.js`: JavaScript for this question - declares a book variable and concatenates it with a message in an alert

## How to Run
- Open `index.html` in your browser
- Or use VS Code Live Server: right-click `index.html` → Open with Live Server

## Code Explanation
The script demonstrates:
- Variable declaration without initialization: `var book;`
- Assigning a book title string to the variable: `book = "A smarter way to learn JavaScript";`
- String concatenation using the `+` operator: `"I am trying to learn from the Book " + book`
- Displaying the concatenated result in an alert dialog

## Expected Output
An alert dialog will appear showing: "I am trying to learn from the Book A smarter way to learn JavaScript"

## Learning Objectives
- Practice variable declaration and assignment with a book title
- Understand string concatenation with the `+` operator
- Learn how to combine static text with variable values
- See how variables can be used in meaningful sentences

## Tips
- The `+` operator combines strings together
- You can change the book title to test with different values
- Try concatenating multiple variables with additional text
- Consider using template literals (ES6) as an alternative: `I am trying to learn from the Book ${book}`