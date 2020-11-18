/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

()[]{} -> True


( -> Push
) -> Pop -> ( True

[ -> Push
] -> Pop -> [ True

*/

function validParentheses(str) {
    const pattern = {'(':')', '[':']', '{':'}'}
    const stack = [];
    for (const bracket of str) {
        if (pattern[bracket]) {
            stack.push(bracket)
        } else {
            const openBracket = stack.pop();
            console.log(openBracket, bracket);
            if (pattern[openBracket] !== bracket) {
                return false;
            }
        }
    }
    return stack.length <= 0;
}


console.log(validParentheses("("));