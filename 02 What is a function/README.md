# `02` What is a Function?
Here is a great 5 min video [explaining functions](https://www.youtube.com/watch?v=N8ap4k_1QEQ).

You can see a function as a **fragment of code** that you encapsulate between curly brackets(`{}`) to be able to use it several times.

## ⌨️ Example:
If we want to get the sum of two numbers, we can declare a function called `sum` that returns the sum of the variables `number1` and `number2`:
```Javascript
function sum(number1,number2) {
  return number1 + number2;
}
```

After the `function` is declared we can use it as many times as we want, like this:
```Javascript
let total = sum(2,3);
let total2 = sum(5,10);
let total3 = sum(2,3);
```

## ⌨️ Instructions:
1. Please calculate the sum between **3445324** and **53454423** and assign the result to a variable called `superDuper`.