# Calculator
## <u>The Brief<u>
This is the Calculator assignment as part of The Odin Project.

We are required to build a basic calculator. It needs to be able to perform addition, subtraction, multiplication and division.

A few things it is specifically required to do:

- String together several operations
- It should not evaluate more than one single pair of numbers at a time
- Any numbers/decimals should not overflow the screen
- A clear button should wipe out any existing data
- Display a snarky message if the user attempts to divide by 0

Extra credit for implementing any of the following:

- Add a decimal input option which accepts only one decimal in the number
- Add a backspace button to allow the user to undo an accidental input
- Add keyboard support
- Make it look pretty and distinct

## <u>The Build</u>

###How it works
1. The calculator displays the value that the user types into it and stores it in displayValue.
2. It then takes the operator that was selected and stores that in operatorValue.
3. Once operator is selected and the user proceeds to type a new number the original number is moved from displayValue into num1. The new number is now stored in displayValue.
4. When equals is selected the 2 values num1 and displayValue are sent to which ever operator function corresponds to the operatorValue and returns the result.
5. The user can then keep calculating with this number by choosing another operator or they can type a new number for a new calculation.


### Basic Operation Functions and Buttons
The four operation functions were the first things to be written. These were simple functions that took 2 variables, performed a single calculation on them and returned the result. These functions are what's at the core of a basic calculator but it was surprising how much more code had to be written to supplement these to get the whole thing running.

The number buttons were not hard-coded into the HTML instead I opted for a FOR loop iterating each one into the DOM. As had been done in the Etch-A-Sketch project, when it came to styling, I knew I could create a container for iterated number buttons and wrap them into the shape of a numpad with CSS.

The operator and 'functions' buttons were originally hard-coded into the project. Though, once I had worked out basic functionality for these buttons, I looked over the code and saw all of the repeated getElementBy and eventListeners for each button. I thought I would try to iteratively create them as I did with the number buttons.

I figured out that I could use an array of objects with each button's name and symbol in it. When it came to adding keyboard support, I had to amend each object to include a 'key' item. This was because which key being pressed is not necessarily what I wanted displayed on the calculator. For example '/' is the key but '÷' is the symbol.

Whether or not this method of producing buttons in this situation is how things should be done is not know at this point in my learning. I did it to see if I could.

### displayItem() and displayValue
The project guide hinted at the need for a variable to house the display number(s). This displayValue ended up being a key component to getting the calculator to function.

Clicking each number called the displayItem function which took the value of the button and added it to displayValue via a string concatenation. If the number wasn't converted to a string it would just arithmetically add the numbers together instead of sequentially 'spelling out' a number on the display.

A check for a decimal was added later which looked if there was already a decimal existing within the string and if the user was trying to enter another. It returned out of the function if the user tries to enter more than one.

I also limited the user input length to 9 figures. This was in an effort to stop any number from overflowing the display. It could have been longer but 9 is what I chose. I had to add `overflow: hidden` to the CSS to handle the odd very large number that could overflow before the numbers turn into scientific notation.

### operatorValue and operate()
The operatorValue holds which ever operator the user selects and displays it in it's own div next to the displayValue.

Depending on what variables already exist when the operator is selected determines what happens with the operator. This could be merely adding the operator to the display or calling the operate function in the same manner as pressing the equals button. This allows the user to chain together multiple calculations before pressing equals. The calculator will evaluate the current pair of numbers and then if the user presses another operator it will calculate a new result from the result before it and the new number.

The operate function takes as parameters the operator and two numbers. In order to call the appropriate function from the operator variable I employed the `window[operator]` syntax. And because the numbers typed into the calculator are formed as strings I `parsedFloat` them before any calculations took place.


### Styling
The font that I chose for the calculator's display ended up influencing my overall design of the web page. The font lent itself to a space/futuristic aesthetic so I gave it a polished metal appearance with the aid of a subtle gradient on the calculator-container.

A similar gradient was employed to replicate a glass screen for the display and in a somewhat tongue-in-cheek reference to the project brief each operator button was given its own unique color. 

To round out the theme I laid it all up on an image of space background and gave the calculator a subtle glow around the border.

## <u>Final Thoughts<u>
The calculator met all the requirements for the brief and each of the extra credit points. It functions as it should and It looks great.

As mentioned above I still don't know if the method of creating the buttons was appropriate but now I know that I am capable of doing it.

After looking at some of the other submissions from other students I noticed that a few of them chose to display the calculator's equations in a smaller font above the result. This would have been easy enough to implement with another div in the display container however I am happy with the design of mine how it is.

A feature that I wanted to build in but couldn't get to work is the animation of the buttons when the user is typing with the keyboard. The buttons move when clicked with the mouse but it would have been cool to see the same when typed. I might revisit this again at a later stage if I happen across a method to achieve this.
















