// Balanced Parenthesis

// Difficulty:
// Medium

// Concepts:
// Loops, Conditionals

// Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

// For example:
// >>> has_balanced_parens("()")
// true

// >>> has_balanced_parens("(Oh Noes!)(")
// false

///////// CODE HERE //////////

const balancedFunction = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            count += 1
        } else if (str[i] === ")") {
            count -= 1
        }
    }
    if (count === 0) {
        return true;
    } else {
        return false;
    }
    
}
console.log(balancedFunction("a(b(c)d)e")) // solved this on my own woo!

////////// SOLUTION 2 //////////

function hasBalancedParens(string) {
    let countOpen = 0;
    let countClosed = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(") {
            countOpen += 1;
        } else if (string[i] === ")") {
            countClosed += 1;
        }
    }
    return countOpen === countClosed
}
console.log(hasBalancedParens("a(b)c(d)e"))