/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator { 
  constructor(result = 0) {
    this.result = result;
  }
  add(number) {
    if (typeof (number) !== 'number') {
      throw new Error('Given Input is not a number.');
    }
    this.result += number;
  }
  subtract(number) {
    if (typeof (number) !== 'number') {
      throw new Error('Given Input is not a number.');
    }
    this.result -= number;
  }
  multiply(number) {
    if (typeof (number) !== 'number') {
      throw new Error('Given Input is not a number.');
    }
    this.result *= number;
  }
  divide(number) {
    if (typeof number !== 'number' || number === 0) {
      throw new Error('Given input is not a number or It is zero.');
    }
    this.result = this.result / number;
  }
  getResult() {
    return this.result;
  }
  clear() {
    this.result = 0;
  }
  calculate(expression) {
    expression = expression.replace(/\s+/g, '');

    if (!expression.match(/^[0-9+\-*/().]+$/)) {
      throw new Error('Invalid characters in the expression.');
    }

    // Check for division by zero
    if (expression.includes('/0')) {
      throw new Error('Division by zero is not allowed.');
    }

    try {
      this.result = eval(expression);  // Evaluate the expression
    } catch {
      throw new Error('Invalid expression format.');
    }
  }
}

module.exports = Calculator;
