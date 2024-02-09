06 Arrow Function
An arrow function is very similar to the traditional function at first, the biggest difference is the arrow symbol => that always goes after the function parameters:

const sum = (param1, param2) => {
    return param1 + param2;
}
Do you see the arrow =>?

Instead of function sum() { it's const sum = () => {. The rest of the function remains the same.

But, why having arrow functions in the first place?
When they are just a single line (like a big percentage of the functions that you will make), they can be super small and easy to write.

Arrow functions came to fix a scope problem that normal functions have, which requires "binding" especially when working with React. Arrow functions don't require .bind(). You can read more about it here.

Arrow functions behave like any other function in any other language, traditional functions don't.

📝 Instructions:
Rewrite the syntax of the current multi function to make it an arrow function.